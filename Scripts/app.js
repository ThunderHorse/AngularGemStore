(function(){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	var gems = [ 
		{
			name: "Soul Gem Shards",
			price: 75,
			description: "An assortment of Soul Gem shards.",
			canPurchase: true,
			origin: "Winterhold",
			images: [
				{
					full:"Images/Soul_Gem_Shards_full.png",
					thumb:"Images/Soul_Gem_Shards_thumb.png"
				}
			]
		},
		{
			name: "Petty Soul Gem",
			price: 200,
			description: "Filled with Petty Soul.",
			canPurchase: true,
			origin: "Tamriel",
			images: [
				{
					full:"Images/Skyrim_Petty_soul_gem_full.png",
					thumb:"Images/Skyrim_Petty_soul_gem_thumb.png"
				}
			]
		},			
		{
			name: 'Lesser Soul Gem',
			price: 300,
			description: "Filled with Petty Soul.",
			canPurchase: false,
			origin: "White Run",
			images: [
				{
					full:"Images/Skyrim_Lesser_soul_gem_full.png",
					thumb:"Images/Skyrim_Lesser_soul_gem_thumb.png"
				}
			]
		},
		{
			name: 'Common Soul Gem',
			price: 400,
			description: "Filled with Lesser Soul.",
			canPurchase: true,
			origin: "Riften",
			images: [
				{
					full:"Images/Skyrim_Common_soul_gem_full.png",
					thumb:"Images/Skyrim_Common_soul_gem_thumb.png"
				}
			]
		},
		{
			name: 'Greater Soul Gem',
			price: 500,
			description: "Filled with Greater Soul. Directly from Calcemo's lab.",
			canPurchase: true,
			origin: "Markarth",
			images: [
				{
					full:"Images/Skyrim_Greater_soul_gem_full.png",
					thumb:"Images/Skyrim_Greater_soul_gem_thumb.png"
				}
			]
		},
		{
			name: "Grand Soul Gem",
			price: 600,
			description: "Filled with Grand Soul.",
			canPurchase: true,
			origin: "Raven Rock",
			images: [
				{
					full:"Images/Skyrim_Grand_soul_gem_full.png",
					thumb:"Images/Skyrim_Grand_soul_gem_thumb.png"
				}
			]
		},
		{
			name: "Dark Soul Gem",
			price: 1000,
			description: "Filled with Black Soul.",
			canPurchase: true,
			origin: "Solstheim",
			images: [
				{
					full:"Images/Skyrim_Dark_soul_gem_full.png",
					thumb:"Images/Skyrim_Dark_soul_gem_thumb.png"
				}
			]
		}
	];
})();