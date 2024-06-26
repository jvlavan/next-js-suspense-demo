export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "React Suspense Demo",
	description: "React suspense demo using fake endpoints",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
  
  
    {
      label: "products",
      href: "/products",
    },
	{
		label: "my IP info",
		href: "/myipinfo",
	  },
	  {
		label: "my weather info",
		href: "/weather",
	  },
	
   
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
	
		{
			label: "products",
			href: "/products",
		  },
		  {
			label: "my IP info",
			href: "/myipinfo",
		  },
		  {
			label: "my weather info",
			href: "/weather",
		  },
		
		
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
