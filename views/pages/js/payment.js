//mechanics for donation Stripe API 
//here is the tutorial to do this API
//https://www.netlify.com/blog/2020/04/28/add-a-donation-button-start-accepting-money-on-jamstack-sites/


(function(){
	const stripe = Stripe('pk_test_51K00GcJqjexyDVSBYXAugBc9vylz44wALU5OTahQNCCqTRXCM6JhnE3eVCKqd4YADcv4NM65RuWU109sVTNT0vPy00ccaXO1O0');
	const btnDonate = document.getElementById('btnDonate');
	const errorMessage = document.getElementById('errorMessage');

	btnDonate.addEventListener('click', () => {
		stripe.redirectToCheckout({
			items: [{
				sku:'IN HERE YOU NEED YOUR PRODUCT SKU FROM STRIPE',
				quantity: 1
			}],
			successUrl: window.location.origin + /success.ejs,  //in here you put the successful page for donators
			cancelUrl: window.location.origin,

		})
			.then(result =>{
				if(result.error){
					errorMessage.textContent = result.error.message;
				}
			});
	});
})();

