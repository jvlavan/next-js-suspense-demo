"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { CopyBlock } from 'react-code-blocks';
import { Suspense } from "react";
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
const text=`async function Product() {
    let [shoppingdata, setshoppingdata] = useState([]);

    async function getdata() {
		
		const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setshoppingdata(data.products);
    }

    useEffect(() => {
      
		  getdata()
    }, []);

    ///return(....code here....)
}
    
    // suspense part:
    <Suspense fallback={<Skeletons/>}>
			<Product />
      </Suspense>
   
      //Full implementation:

      "use client"
import { title } from "@/components/primitives";
import Skeletons from "@/components/skeleton";
import {  useRef ,useEffect, useState} from "react";
import { Suspense } from 'react';


async function Product() {
    let [shoppingdata, setshoppingdata] = useState([]);

    async function getdata() {
		
		const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setshoppingdata(data.products);
    }

    useEffect(() => {
      
		  getdata()
    }, []);

    return (
        <section className="flex flex-wrap py-4">
            {(shoppingdata && shoppingdata.length > 0) &&
                shoppingdata.map((product, index) => (
                    <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-4 m-4">
                        <a href="#">
                            <img className="p-8 rounded-t-lg" src={product.thumbnail} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.description}</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                        </div>
                    </div>
                ))}
        </section>
    );
}


export default function BlogPage() {
	
	return (
		<div>
			<h1 className={title()}>Products</h1>
			
			
			<Suspense fallback={<Skeletons/>}>
			<Product />
      </Suspense>

				
			
        
			
</div>

		
	
	);
}`;
export default function Home() {
	return (
		<section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">React Suspense Demo</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Sample demo of React suspense demo using fake endpoints press get started button to see loading skeleton. Below code is implementation of suspense in Next JS </p>
            <a href="/products" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        
	
	</div>             
    </div>
    	
			<Suspense fallback={<p>I am Layout jsx suspense 👀👀👀</p> }>
            <Editor height="90vh" defaultLanguage="javascript" defaultValue={text} />
      </Suspense>
 
</section>
	);
}
