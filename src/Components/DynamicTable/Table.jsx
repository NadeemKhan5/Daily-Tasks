import React,{Component} from "react";
class Table extends Component {

constructor(props){
    super(props);
    this.state = {
        users:[],
        isLoading:false,
        isError:false
    }
}

//async function get request

async componentDidMount(){
    this.setState({isLoading:true})

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    
    if(response.ok){
        const users =  await response.json()
        console.log(users);
        this.setState({users, isLoading:false})
    }else{
        this.setState({isError:true, isLoading:false})
    }
}

renderTableHeader = () =>{
return Object.keys(this.state.users[0]).map(attr=> <th key={attr}>
    {attr.toUpperCase()}
</th>)
}

renderTableRows = () =>{
return this.state.users.map(user=>{
    return(
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{`${user.address.street},${user.address.city}`}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
        </tr>
    )
})
}
    render() { 
        const {users, isLoading, isError} =this.state

        if(isLoading){
            return <div>Loading...</div>
        }
        if(isError){
            return <div>Error...</div>
        }
        return users.length > 0 
        ? 
        (
            <table>
                <thead>
                    <tr>
                        {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        ):(
            <div>No Users</div>
        )
    }
}
 
export default Table;




// Without fetching data

// import * as ReactBootstrap from "react-bootstrap";

// const Table = () => {
//   const players = [
//     { position: "Forward", name: "lebron", team: "lakers" },
//     { position: "Guard", name: "jinn", team: "Rokets" },
//     { position: "backword", name: "james", team: "Buckets" },
//     { position: "Forward", name: "john", team: "Marlrick" },
//   ];

//   const header = [
//     {
//       col1: "name",
//       col2: "postion",
//       col3: "team",
//     },
//   ];
//   const renderPlayer = (player, index) => {
//     return (
//       <tr key={index}>
//         <th>{player.name}</th>
//         <th>{player.position}</th>
//         <th>{player.team}</th>
//       </tr>
//     );
//   };
//   const renderheader = (header, index) => {
//     return (
//       <tr key={index}>
//         <td>{header.col1}</td>
//         <td>{header.col2}</td>
//         <td>{header.col3}</td>
//       </tr>
//     );
//   };

//   return (
//     <div>
//       <ReactBootstrap.Table striped bordered hover>
//         <thead>{header.map(renderheader)}</thead>
//         <tbody>{players.map(renderPlayer)}</tbody>
//       </ReactBootstrap.Table>
//     </div>
//   );
// };
// export default Table;
