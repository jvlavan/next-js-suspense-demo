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
let lati="48.137154",long="11.576124"
import {Card, CardBody,Divider,Snippet,Table, CardHeader,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell} from "@nextui-org/react";
  import ReactWeather,  { useVisualCrossing } from 'react-open-weather';
async function GetIp() {
  const [myobj,Setmyobj]=useState()
	const ans=async()=>{
		const res=await fetch("https://ipapi.co/json/")
		const dataip=await res.json()

		Setmyobj(dataip)
    lati= dataip?.latitude
    console.log(lati)
    long= dataip?.longitude
    console.log(long)
  
  }
	useEffect(() => {
		ans();
   
	  }, []); 
    
    let { data, isLoading, errorMessage } = useVisualCrossing({
      key: process.env.NEXT_PUBLIC_OPENWEATHER_API,
      lat: lati,
      lon: long,
      lang: 'en',
      unit: 'metric', // values are (metric,us,uk)
    });
    console.log(data)
	return (
		<section className="flex flex-col items-center justify-center  py-8 md:py-10">
			<div id="1" className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Know your &nbsp;</h1>
				<h1 className={title({ color: "violet" })}>current weather info</h1>
				<br />
				<h1 className={title()}>
					and the following days predicted forecast.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					In just one place.
				</h2>
			</div>

	
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
    </Card></div>
    <div > 
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel={myobj.city}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
    
    
    </div></div>
      }
   
	
		</section>
		
	);

}
export default function Home() {
  
  return(
  <div>
			<h1 className={title()}>My Weather Info</h1>
  <Suspense fallback={<Loadingcircle/>}>
			<GetIp/>
      </Suspense>
</div>
  )
}
