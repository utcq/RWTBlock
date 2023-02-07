import './../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import JsonData from "../data/transactions.json"
import JsonData1 from "../data/accounts.json"
import React from 'react';
import { useParams } from "react-router-dom";
import { Table } from "@nextui-org/react";


function Blockchain(addr){
    if (addr !== undefined) {JsonData = JsonData.filter(a => a.sender === addr || a.receiver === addr); }
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <Table.Row>
                    <Table.Cell><a style={{ color:'#a284e0', fontWeight: 'bold'}} href={`/trans/${info.sender}`}>{info.sender}</a></Table.Cell>
                    <Table.Cell><a style={{ color:'#a284e0', fontWeight: 'bold'}} href={`/trans/${info.receiver}`}>{info.receiver}</a></Table.Cell>
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


 function Card(addr) {
    const username=JsonData1[addr].username;
    const balance=JsonData1[addr].balance;
    const birth=JsonData1[addr].birth;
    return (
        <div className="card">
        <div className="banner">
        <svg width="64px" height="64px" viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z" fill="#292D32"></path> <path d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z" fill="#292D32"></path> <path d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z" fill="#292D32"></path> </g></svg>
        </div>
        <div className="menu">
          <div><span></span><span></span><span></span></div>
        </div>
        <h2 className="name">@${username}</h2>
        <div className="title">Platform User</div>
        <div className="actions">
          <div className="follow-info">
            <h2><a href onClick={(e) => {e.preventDefault()}}><span>{balance}</span><small>Balance</small></a></h2>
            <h2><a href onClick={(e) => {e.preventDefault()}}><span>{birth}</span><small>Since</small></a></h2>
          </div>
        </div>
      </div>
    );
  }

function Profile() {
    const params = useParams();
    const addr = params.addr;
    return (
        <div className="userprofile">
            <div className="CardUser">{Card(addr)}</div>
            {Blockchain(addr)}
        </div>
    );
}

export default Profile;