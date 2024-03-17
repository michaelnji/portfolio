export async function getQuote(){
    const url = 'https://stoic.tekloon.net/stoic-quote'
  try {
      const resp = await fetch(url)
     if(resp.ok){
		 const data = await resp.json()
    console.log(data)
         return {
				 data,
				status: 200,
				message: 'success'
			};
		
	 }
     
		return {
			data:null,
			status: 500,
			message: 'Internal Server Error'
		};
  } catch (error) {
    return {
			data:null,
			status: 500,
			message: 'Internal Server Error'
		};
  }

}