<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import TrustStrip from '$lib/components/TrustStrip.svelte';
	import ServicesGrid from '$lib/components/ServicesGrid.svelte';
	import GlobalNetwork from '$lib/components/GlobalNetwork.svelte';
	import ProcessTimeline from '$lib/components/ProcessTimeline.svelte';
	import WhySwiftPort from '$lib/components/WhySwiftPort.svelte';
	import TrackingPreview from '$lib/components/TrackingPreview.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
</script>

<svelte:head>
	<title>SwiftPort Logistics | Global Shipping & Freight Solutions</title>
	<meta name="description" content="SwiftPort Logistics provides fast, secure, and reliable global freight and parcel shipping solutions. Air freight, sea freight, door-to-door delivery, customs clearance, and real-time shipment tracking worldwide." />
	<meta name="keywords" content="global logistics, freight shipping, air freight, sea freight, door-to-door delivery, customs clearance, shipment tracking, cargo shipping, international shipping, logistics company, parcel delivery, warehouse storage" />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="SwiftPort Logistics" />
	<link rel="canonical" href="https://www.swiftportlogistics.online/" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="SwiftPort Logistics | Global Shipping & Freight Solutions" />
	<meta property="og:description" content="Fast, secure, and reliable global logistics. Air freight, sea freight, door-to-door delivery, and real-time shipment tracking worldwide." />
	<meta property="og:url" content="https://www.swiftportlogistics.online/" />
	<meta property="og:site_name" content="SwiftPort Logistics" />
	<meta property="og:image" content="https://www.swiftportlogistics.online/Gemini_Generated_Image_l3496wl3496wl349.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="SwiftPort Logistics | Global Shipping & Freight Solutions" />
	<meta name="twitter:description" content="Fast, secure, and reliable global logistics. Track shipments, get quotes, and manage your freight worldwide." />
	<meta name="twitter:image" content="https://www.swiftportlogistics.online/Gemini_Generated_Image_l3496wl3496wl349.png" />

	<!-- Structured Data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "SwiftPort Logistics",
		"description": "Fast, secure, and reliable global logistics providing air freight, sea freight, door-to-door delivery, customs clearance, and real-time shipment tracking.",
		"url": "https://www.swiftportlogistics.online",
		"logo": "https://www.swiftportlogistics.online/Gemini_Generated_Image_l3496wl3496wl349.png",
		"contactPoint": {
			"@type": "ContactPoint",
			"contactType": "customer service",
			"email": "Swiftportlogistsusa@gmail.com",
			"telephone": "+1-657-802-2801"
		},
		"sameAs": [],
		"address": {
			"@type": "PostalAddress",
			"addressCountry": "US"
		},
		"areaServed": "Worldwide",
		"serviceType": ["Air Freight", "Sea Freight", "Road Freight", "Door-to-Door Delivery", "Warehousing", "Customs Clearance", "Shipment Tracking"]
	}
	</script>
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "SwiftPort Logistics",
		"url": "https://www.swiftportlogistics.online",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://www.swiftportlogistics.online/track?trackingNumber={search_term_string}",
			"query-input": "required name=search_term_string"
		}
	}
	</script>
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [{
			"@type": "ListItem",
			"position": 1,
			"name": "Home",
			"item": "https://www.swiftportlogistics.online/"
		}]
	}
	</script>
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "How do I track my shipment?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Enter your tracking number on our tracking page. You can track your shipment status, location, and delivery progress in real time."
				}
			},
			{
				"@type": "Question",
				"name": "What shipping services does SwiftPort offer?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "SwiftPort offers air freight, sea freight, road freight, door-to-door delivery, warehousing and storage, customs clearance, and customer support."
				}
			},
			{
				"@type": "Question",
				"name": "Does SwiftPort offer international shipping?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Yes, SwiftPort provides global logistics solutions with international freight and cross-border delivery services worldwide."
				}
			},
			{
				"@type": "Question",
				"name": "How can I contact SwiftPort Logistics?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "You can contact SwiftPort via WhatsApp at +1 657 802 2801 or email at Swiftportlogistsusa@gmail.com."
				}
			}
		]
	}
	</script>
</svelte:head>

<Hero />
<TrustStrip />
<ServicesGrid />
<GlobalNetwork />
<ProcessTimeline />
<WhySwiftPort />
<TrackingPreview />
<CTASection />
