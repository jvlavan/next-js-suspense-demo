"use client";
import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Counter} from "@/components/counter"
import { Map, Marker } from "pigeon-maps"
import React from "react";
import { useState ,useEffect} from "react";
import { Suspense } from 'react';
import Loadingcircle from "@/components/loadingcircle";
import {Card, CardBody,Divider,Snippet,Table, CardHeader,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell} from "@nextui-org/react";

async function GetIp() {
  const [myobj,Setmyobj]=useState()
	const ans=async()=>{
		const res=await fetch("https://ipapi.co/json/")
		const data=await res.json()
		Setmyobj(data)
		console.log(data)
	}
	useEffect(() => {
		ans();
	  }, []); 
	
	return (
		<section className="flex flex-col items-center justify-center  py-8 md:py-10">
			<div id="1" className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Know your &nbsp;</h1>
				<h1 className={title({ color: "violet" })}>IP Address&nbsp;</h1>
				<br />
				<h1 className={title()}>
					and their relevant network information and geographical location also.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					In just one place.
				</h2>
			</div>

			{myobj &&
			<div  className="mt-8">
			{"My "+myobj.version} is <Snippet>{myobj.ip}</Snippet>
			
			</div>}
			<Divider className="my-4" />

	
		{myobj && 
     
<div id="2" className="grid lg:grid-cols-2  gap-4 "><div > <Card className="py-4">

        
    
      <CardBody className="overflow-visible py-2">
	  <Map height={350} defaultCenter={[myobj.latitude,myobj.longitude]} defaultZoom={11}>
      <Marker width={50} anchor={[myobj.latitude,myobj.longitude]} />
    </Map>
<Divider className="my-4" />
	<h6 className="font-bold text-center">Approximate Location Map</h6>
      </CardBody>
    </Card></div><div >  <Table hideHeader aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Country</TableCell>
          <TableCell>{myobj.country_name}</TableCell>
          
        </TableRow>
        <TableRow key="2">
          <TableCell>Country Capital</TableCell>
          <TableCell>{myobj.country_capital}</TableCell>
          
        </TableRow>
        <TableRow key="3">
          <TableCell>RegionName</TableCell>
          <TableCell>{myobj.region}</TableCell>
          
        </TableRow>
        <TableRow key="4">
          <TableCell>City</TableCell>
          <TableCell>{myobj.city}</TableCell>
        
        </TableRow>
		<TableRow key="5">
          <TableCell>Latitude</TableCell>
          <TableCell>{myobj.latitude}</TableCell>
        
        </TableRow>
		<TableRow key="6">
          <TableCell>Longitude</TableCell>
          <TableCell>{myobj.longitude}</TableCell>
        
        </TableRow>
		<TableRow key="7">
          <TableCell>Timezone</TableCell>
          <TableCell>{myobj.timezone}</TableCell>
        
        </TableRow>
		<TableRow key="8">
          <TableCell>Currency</TableCell>
          <TableCell>{myobj.currency}</TableCell>
        
        </TableRow>
		<TableRow key="9">
          <TableCell>Country Code</TableCell>
          <TableCell>{myobj.country_code}</TableCell>
        
        </TableRow>
		<TableRow key="10">
          <TableCell>ISP</TableCell>
          <TableCell>{myobj.org}</TableCell>
        
        </TableRow>
		<TableRow key="11">
          <TableCell>ASN</TableCell>
          <TableCell>{myobj.asn}</TableCell>
        
        </TableRow>


      </TableBody>
    </Table></div></div>
      }
   
	
		</section>
		
	);

}
export default function Home() {
  return(
  <div>
			<h1 className={title()}>My IP Info</h1>
  <Suspense fallback={<Loadingcircle/>}>
			<GetIp/>
      </Suspense>
</div>
  )
}
