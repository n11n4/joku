const PRICES_ENDPOINT = 'https://api.porssisahko.net/v1/latest-prices.json'
const PRICE_ENDPOINT = 'https://api.porssisahko.net/v1/price.json';
const dateAndTimeNow = new Date();
const date = dateAndTimeNow.toISOString().split('T')[0];
const hour = dateAndTimeNow.getHours();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate()+1);
const nextDate = tomorrow.toISOString().split('T')[0];

async function pricesList(){
  const response = await fetch(`${PRICES_ENDPOINT}?date=${date}&hour=${hour}`);
  const { prices } = await response.json();
  const priceData = (Object.keys(prices).map(key => prices[key].price.toFixed(2) + '/' + prices[key].startDate.split('T')[0] + ' '))
  return(
    <>
    {priceData}
    </>
)}

const Page = async () => {
  return (
    <>
    <div className='px-7'>
    <p>Sähkön hinta {nextDate}</p>
    {pricesList()}
    </div>
    </>
  )
}

export default Page;