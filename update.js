import bcd from '@mdn/browser-compat-data' with { type: 'json' };
import { propertiesOrder } from './order.js';

function checkProperties() {
	console.log('Fetching CSS properties from @mdn/browser-compat-data...\n');

	// Get all CSS properties from BCD
	const excludeProperties = new Set([
		'alt',				// Deprecated, Safari 9 only, no real usage
		'ime-mode',			// Deprecated, old Firefox/Edge only
		'custom-property',	// Meta-property for --* CSS variables, not a real property name
	]);

	const bcdProperties = Object.keys(bcd.css?.properties || {})
		.filter(prop => !prop.startsWith('-webkit-') && !prop.startsWith('-moz-'))
		.filter(prop => !excludeProperties.has(prop))
		.sort();

	const existingProperties = new Set(propertiesOrder);

	console.log(`Total properties in BCD: ${bcdProperties.length}`);
	console.log(`Existing properties in the config: ${propertiesOrder.length}\n`);

	// Find properties that are in BCD but missing from the config
	const missingProperties = bcdProperties.filter(prop => !existingProperties.has(prop));

	if (missingProperties.length === 0) {
		console.log('✅ All BCD properties are present in the config!');
	} else {
		console.log(`⚠️ Found ${missingProperties.length} properties missing from the config:\n`);
		missingProperties.forEach(prop => {
			console.log(`- ${prop}`);
		});
	}

	// Find properties in the config that are not in BCD
	const extraProperties = propertiesOrder.filter(prop => !bcdProperties.includes(prop));

	if (extraProperties.length > 0) {
		console.log(`\n📋 Found ${extraProperties.length} properties in the config not in BCD:`);
		extraProperties.forEach(prop => {
			console.log(`  - ${prop}`);
		});
	}
}

checkProperties();
