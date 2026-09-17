export const siteData = {
	company: {
		name: 'SwiftPort Logistics',
		tagline: 'Fast, secure and reliable global logistics.',
		whatsapp: '+1 657 802 2801',
		email: 'Swiftportlogistsusa@gmail.com',
		address: 'United States'
	},
	nav: [
		{ label: 'Track Shipment', href: '/track' },
		{ label: 'Ship', href: '/ship' },
		{ label: 'Services', href: '/services' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	],
	services: [
		{
			id: 'air',
			number: '01',
			title: 'Air Freight',
			description: 'Fast international transportation for time-sensitive shipments.',
			details:
				'Express and standard air freight solutions with global carrier partnerships. Ideal for high-value, perishable, or urgent cargo requiring rapid delivery across international borders.',
			icon: 'plane'
		},
		{
			id: 'sea',
			number: '02',
			title: 'Sea Freight',
			description: 'Reliable ocean freight solutions for larger and heavier cargo.',
			details:
				'Full container load (FCL) and less-than-container load (LCL) options. Cost-effective for bulk shipments with flexible scheduling and global port coverage.',
			icon: 'ship'
		},
		{
			id: 'road',
			number: '03',
			title: 'Road Freight',
			description: 'Flexible ground transportation from pickup to destination.',
			details:
				'Door-to-door delivery with real-time GPS tracking. Full truckload and partial load options for domestic and cross-border ground shipping.',
			icon: 'truck'
		},
		{
			id: 'warehouse',
			number: '04',
			title: 'Warehousing & Storage',
			description: 'Secure storage and inventory handling.',
			details:
				'Climate-controlled facilities with 24/7 security monitoring. Inventory management, pick and pack, and distribution services available.',
			icon: 'warehouse'
		},
		{
			id: 'customs',
			number: '05',
			title: 'Customs Clearance',
			description: 'Expert support with documentation and customs processes.',
			details:
				'Licensed customs brokers handle classification, documentation, duties, and compliance. Streamlined clearance to minimize delays at borders.',
			icon: 'clipboard'
		},
		{
			id: 'support',
			number: '06',
			title: 'Customer Support',
			description: 'Dedicated assistance throughout your shipment journey.',
			details:
				'Multi-channel support via phone, email, and WhatsApp. Dedicated account managers for business clients with priority response times.',
			icon: 'headset'
		}
	],
	trackingSteps: [
		{ label: 'Shipment Created', description: 'Your shipment has been registered in our system.' },
		{ label: 'Picked Up', description: 'Cargo collected from the origin address.' },
		{ label: 'In Transit', description: 'Shipment is on its way to the destination.' },
		{ label: 'At Destination Facility', description: 'Arrived at the local distribution center.' },
		{ label: 'Out for Delivery', description: 'Package is on the delivery vehicle.' },
		{ label: 'Delivered', description: 'Successfully delivered to the recipient.' }
	],
	footer: {
		services: [
			{ label: 'Air Freight', href: '/services#air' },
			{ label: 'Sea Freight', href: '/services#sea' },
			{ label: 'Road Freight', href: '/services#road' },
			{ label: 'Warehousing', href: '/services#warehouse' },
			{ label: 'Customs Clearance', href: '/services#customs' }
		],
		company: [
			{ label: 'About Us', href: '/about' },
			{ label: 'Careers', href: '/careers' },
			{ label: 'Press', href: '/press' },
			{ label: 'Contact', href: '/contact' }
		],
		resources: [
			{ label: 'Track Shipment', href: '/track' },
			{ label: 'Shipping Guide', href: '/services' },
			{ label: 'FAQ', href: '/track#faq' },
			{ label: 'Support', href: '/contact' }
		]
	}
};
