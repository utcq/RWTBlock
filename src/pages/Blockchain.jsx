import './../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import JsonData from "./../data/transactions.json"
import React from 'react';
import { useParams } from "react-router-dom";
import { Table } from "@nextui-org/react";


/*
export default function Blockchain({ match }){
    const params = useParams();
    if (params.addr !== undefined) {JsonData = JsonData.filter(a => a.sender === params.addr || a.receiver === params.addr); }
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr style={{ color:'#a284e0', fontWeight: 'bold'}}>
                    <td><a style={{ color:'#a284e0', fontWeight: 'bold'}} href={`/trans/${info.sender}`}>{info.sender}</a></td>
                    <td><a style={{ color:'#a284e0', fontWeight: 'bold'}} href={`/trans/${info.receiver}`}>{info.receiver}</a></td>
                    <td style={{color: '#a284e0'}}>{info.amount}</td>
                </tr>
            )
        }
    )
 
    return(
        <div className="blocktable" style={{ color:'#a284e0', fontWeight: 'bold'}}>
            <div className='paragraph'>
                <br></br>
            </div>
            <table className="table table-striped" style={{color:'#a284e0', fontWeight: 'bold'}}>
                <thead style={{ color:'#a284e0', fontWeight: 'bold'}}>
                    <tr>
                    <th>Sender</th>
                    <th>Receiver</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody style={{ color:'#a284e0', fontWeight: 'bold'}}>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
        </div>
    )
 }
  
*/


export default function Blockchain({ match }){
    const params = useParams();
    if (params.addr !== undefined) {JsonData = JsonData.filter(a => a.sender.includes(params.addr) || a.receiver.includes(params.addr)); }
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <Table.Row>
                    <Table.Cell><a style={{ color:'#a284e0', fontWeight: 'bold'}} href={`/user/${info.sender}`}>{info.sender}</a></Table.Cell>
                    <Table.Cell><a style={{ color:'#a284e0', fontWeight: 'bold'}} href={`/user/${info.receiver}`}>{info.receiver}</a></Table.Cell>
                    <Table.Cell><p style={{color: '#a284e0'}}>{info.amount}</p></Table.Cell>
                </Table.Row>
            )
        }
    );
 
    return (
        <div className="blocktable" style={{fontWeight: 'bold'}}>
            <Table
            aria-label="Example table with static content"
            css={{
                height: "auto",
                minWidth: "100%",
                backgroundColor: "#343a40",
                color: "white"
            }}
            >
            <Table.Header style={{backgroundColor: "#22262a"}}>
                <Table.Column style={{backgroundColor: "#22262a"}}>SENDER</Table.Column>
                <Table.Column style={{backgroundColor: "#22262a"}}>RECEIVER</Table.Column>
                <Table.Column style={{backgroundColor: "#22262a"}}>AMOUNT</Table.Column>
            </Table.Header>
            <Table.Body>
                {DisplayData}
            </Table.Body>
            </Table>
        </div>
      );
 }