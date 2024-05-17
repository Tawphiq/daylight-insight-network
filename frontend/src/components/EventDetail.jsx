/* eslint-disable react/no-unescaped-entities */
// EventDetail.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router-dom';
import westalent from '../assets/daylight-bg2.mp4'
import max24 from '../assets/max24.jpg'
import castvote from '../assets/castvote.jpg'
import guest1 from '../assets/westalents-guests/guest1.jpg'
import guest2 from '../assets/westalents-guests/guest2.jpg'
import guest3 from '../assets/westalents-guests/guest3.jpg'
import guest4 from '../assets/westalents-guests/guest4.jpg'
import winner1 from '../assets/westalents-winners/winner1.jpg'
import winner2 from '../assets/westalents-winners/winner2.jpg'
import winner3 from '../assets/westalents-winners/winner3.jpg'
import winner4 from '../assets/westalents-winners/winner4.jpg'
import winner5 from '../assets/westalents-winners/winner5.jpg'
import winner6 from '../assets/westalents-winners/winner6.jpg'
import winner7 from '../assets/westalents-winners/winner7.jpg'
import winner8 from '../assets/westalents-winners/winner8.jpg'
import winner9 from '../assets/westalents-winners/winner9.jpg'
import winner10 from '../assets/westalents-winners/winner10.jpg'
import winner11 from '../assets/westalents-winners/winner11.jpg'
import winner12 from '../assets/westalents-winners/winner12.jpg'
import winner13 from '../assets/westalents-winners/winner13.jpg'
import winner14 from '../assets/westalents-winners/winner14.jpg'
import winner15 from '../assets/westalents-winners/winner15.jpg'
import winner16 from '../assets/westalents-winners/winner16.jpg'
import winner17 from '../assets/westalents-winners/winner17.jpg'
import winner18 from '../assets/westalents-winners/winner18.jpg'
import winner19 from '../assets/westalents-winners/winner19.jpg'
import winner20 from '../assets/westalents-winners/winner20.jpg'
import winner21 from '../assets/westalents-winners/winner21.jpg'
import winner22 from '../assets/westalents-winners/winner22.jpg'
import wathighlights1 from '../assets/wathighlights1.mp4'
import wathighlights2 from '../assets/wathighlights2.mp4'
import ReactPlayer from 'react-player';
import wasacovervid from '../assets/wasacovervid.mp4';
import wasahighlights from '../assets/wasahighlights.mp4';
import wasa1 from '../assets/wasa/wasa1.jpg';
import wasa2 from '../assets/wasa/wasa2.jpg';
import wasa3 from '../assets/wasa/wasa3.jpg';
import wasa4 from '../assets/wasa/wasa4.jpg';
import wasa5 from '../assets/wasa/wasa5.jpg';
import wasa6 from '../assets/wasa/wasa6.jpg';
import wasa7 from '../assets/wasa/wasa7.jpg';
import wasa8 from '../assets/wasa/wasa8.jpg';
import wasa9 from '../assets/wasa/wasa9.jpg';
import wasa10 from '../assets/wasa/wasa10.jpg';
import wasa11 from '../assets/wasa/wasa11.jpg';
import wasa12 from '../assets/wasa/wasa12.jpg';
import wasa13 from '../assets/wasa/wasa13.jpg';
import wasa14 from '../assets/wasa/wasa14.jpg';
import wasa15 from '../assets/wasa/wasa15.jpg';
import wasa16 from '../assets/wasa/wasa16.jpg';
import wasa17 from '../assets/wasa/wasa17.jpg';
import wasa18 from '../assets/wasa/wasa18.jpg';
import wap from '../assets/waphcover.jpg'
import waphfiling from '../assets/waphfiling.jpg'
import waphcategories from '../assets/waphcategories.jpg'
import waphinstructions from '../assets/waphinstructions.jpg'
import wasahcover from '../assets/wasahcover.jpg'
import wasahcoming from '../assets/wasahcoming.jpg'
import wasahcategories from '../assets/wasahcategories.jpg'
import wasahcriteria from '../assets/wasahcriteria.jpg'
import waecover from '../assets/waecover.jpg'
import waecategories from '../assets/waecategories.jpg'
import waecriteria from '../assets/waecriteria.jpg'
import waecoming from '../assets/waecoming.jpg'
import wabcoming from '../assets/wabcoming.jpg'
import wabfiling from '../assets/wabfiling.jpg'
import wabcategories from '../assets/wabcategories.jpg'
import wabcategory from '../assets/wabcategory.jpg'
import wabcriteria from '../assets/wabcriteria.jpg'
import wafcomingvid from '../assets/wafcomingvid.mp4'
import waffiling from '../assets/waffiling.jpg'
import wafcategories from '../assets/wafcategories.jpg'
import spg1 from '../assets/spg1.jpg'
import spg2 from '../assets/spg2.jpg'
import spg3 from '../assets/spg3.jpg'
import spg4 from '../assets/spg4.jpg'
import hap1 from '../assets/hap1.jpg'
import hap2 from '../assets/hap2.jpg'
import perf1 from '../assets/perf1.jpg'
import perf2 from '../assets/perf2.jpg'











const EventDetail = () => {
  const { id } = useParams();

  // Sample data for multiple events
  const eventsData = [
    {
      id: 1,
      eventName: 'West African Talents And Entrepreneurs Awards',
      date: '2023-01-01',
      location: 'Past Event 1 Venue',
      description: 'This is the first past event.',
      coverVideo: westalent,
      highlights: [wathighlights1, wathighlights2],
      gallery: {
        guestsOfHonor: [guest1, guest2, guest3, guest4],
        winners: [winner1, winner2, winner3, winner4, winner5, winner6, winner7, winner8, winner9, winner10, winner11, winner12, winner13,
            winner14, winner15, winner16, winner17, winner18, winner19, winner20, winner21, winner22
        ],
      },
      mediaPartners: [max24],
      sponsors: [castvote],
      socialMediaHandles: {
        facebook: 'West African Talents And Entrepreneurs Awards',
        twitter: 'WestTalentsCeos',
        instagram: 'african_talents_entrepreneurs',
      },
    },
    {
      id: 2,
      eventName: 'West African sports awards and honors',
      date: '2024-12-31',
      location: 'AMA City Hall',
      coverVideo: [wasacovervid],
      eventGallery: [wasa1, wasa2, wasa3, wasa4, wasa5, wasa6, wasa7, wasa8, wasa9, wasa10, wasa11, wasa12, wasa13, wasa14, wasa15, wasa16, wasa17, wasa18],
      highlights: [wasahighlights],
    },

    {
      id: 3,
      eventName:'West African Photographers Awards and Honors',
      date: null,
      coverImage: [wap]
    },
    {
      id: 4,
      eventName:'West Africa Sports Awards and Honors',
      date: null,
      coverImage: [wasahcover],
    },
    {
      id: 5,
      eventName:'West Africa Event Planners Awards and Honors',
      date: null,
      coverImage: [waecover]
    },
    {
      id: 6,
      eventName: 'West Africa Beauticians Symposium Awards',
      date: null,
      coverImage: wabcoming
    },
    {
      id: 7,
      eventName: 'West Africa Fashion Awards',
      date: null,
      coverVideo: wafcomingvid
    }
  ];

  // Find the selected event based on the id parameter
  const selectedEvent = eventsData.find((event) => event.id.toString() === id);

  // If the selected event is not found, you can handle it as needed (e.g., show a message)
  if (!selectedEvent) {
    return <div>No event found</div>;
  }

  const {
    eventName,
    date,
    location,
    description,
    coverVideo,
    gallery,
    mediaPartners,
    sponsors,
    socialMediaHandles,
    highlights,
    eventGallery,
    coverImage,
  } = selectedEvent;

  return (
    <div className="container mx-auto mt-8 font-nunito">
      <div className="bg-gray-100 p-4 rounded">
        {coverVideo && <ReactPlayer url={coverVideo} controls={true} loop={true} width="100%" aspect-ratio="16/9" className="w-full h-48 object-coverj mb-4 rounded" />}
        {coverImage && <img src={coverImage} alt="" />}
        <h2 className="text-xl font-bold mb-2 mt-4 uppercase">{eventName}</h2>
        {date && <p>Date: {date}</p>}
        {location && <p>Location: {location}</p>}
        {description && <p>Description: {description}</p>}

        {eventName === 'West African Photographers Awards and Honors' && <div className='mt-10'>
          <div>
            <h3 className='bg-amber-400 text-white font-bold grid justify-center p-2 rounded-md uppercase'>How to file for nominations</h3>
            <img src={waphfiling} alt="" className='mt-2' />
            <p className='text-lg mt-2'>Send the listed details to our official whatsapp numbers (<span className='font-bold text-sky-400'>+233266862270 / +233533563345</span>)</p>
            <ul className='text-lg bullet-list mt-2'>
              <li>Name</li>
              <li>Category</li>
              <li>Proof of work</li>
              <li>Professional Pictures</li>
              <li>Social Media Handles</li>
            </ul>
          </div>
          <div className='bg-amber-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Categories</div>
          <img src={waphcategories} alt="" className='mt-2' />
          <ul className='text-lg bullet-list mt-2'>
            <li>West Africa Best Lifestyle Photographer of the year 23/24</li>
            <li>West Africa Best Product Photographer of the year 23/24</li>
            <li>West Africa Best Event Photographer of the year 23/24</li>
            <li>West Africa Best Promsing Photographer of the year 23/24</li>
            <li>West Africa Best Creative Photographer of the year 23/24</li>
            <li>West Africa Best Portrait Photographer of the year 23/24</li>
            <li>West Africa Best Documentary Photographer of the year 23/24</li>
            <li>West Africa Best New Photographer of the year 23/24</li>
            <li>West Africa Best Fashion Photographer of the year 23/24</li>
            <li>West Africa Best Wedding/Engagement Photographer of the year 23/24</li>
            <li>West Africa Best Commercial Photographer of the year 23/24</li>
            <li>West Africa Best Photo Retoucher of the year 23/24</li>
            <li>West Africa Best Videographer of the year 23/24</li>
            <li>West Africa Best Photog Editor of the year 23/24</li>
            <li>West Africa Best Dramatic Photographer of the year 23/24</li>
            <li>West Africa Best Phone Photographer of the year 23/24</li>
            <li>West Africa Best Photographer of the year 23/24</li>
          </ul>
          <div>
            <h3 className='bg-amber-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Criteria for Winners</h3>
            <img src={waphinstructions} alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>Nominee must have 1000+ votes to win a category.</li><br />
            <li>First to Third of every category is claimed Winner and takes home a customized plaque, a Special Citation, a Certificate and a Medal.</li><br />
            <li>Overall Winner (that's the Nominee with the highest number of votes in all) takes home a CASH PRIZE attached to the Category Prizes.</li><br />
            <li>Digital Promotion :A live interview with a media company will be arranged for the Overall winner (thats the Nominee who wins the OVERALL CASH PRIZE through out the event).</li><br />
            <li>Nominees that reach 2000+ votes but do not win their category gain a Special Citation a Customized Plaque, a Certificate and a Medal.</li>
            </ul>
          </div>
        </div>}

        {eventName === 'West Africa Sports Awards and Honors' && <div>
          <div>
          <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase'>How to file for nominations</h3>
            <img src={wasahcoming} alt="" className='mt-2' />
            <p className='text-lg mt-2'>Send the listed details to our official whatsapp numbers (<span className='font-bold text-green-400'>+233266862270 / +233533563345</span>)</p>
            <ul className='text-lg bullet-list mt-2'>
              <li>Name</li>
              <li>Category</li>
              <li>Proof of work</li>
              <li>Professional Pictures</li>
              <li>Social Media Handles</li>
            </ul>
          </div>
          <div>
            <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Categories</h3>
            <img src={wasahcategories} alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>West Africa Best Male/Female Center Back 23/24</li>
            <li>West Africa Best Male/Female Left Back 23/24</li>
            <li>West Africa Best Male/Female Right Back 23/24</li>
            <li>West Africa Best Male/Female Defensive Midfielder 23/24</li>
            <li>West Africa Best Male/Female Attacking Midfielder 23/24</li>
            <li>West Africa Best Male/Female Holding Midfielder 23/24</li>
            <li>West Africa Best Male/Female Left Winger 23/24</li>
            <li>West Africa Best Male/Female Right Winger 23/24</li>
            <li>West Africa Best Male/Female Striker 23/24</li>
            <li>West Africa Best Male/Female GoalKeeper 23/24</li>
          </ul>
          </div>
          <div>
          <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Criteria for Winners</h3>
            <img src={wasahcriteria} alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>Nominee must have 1000+ votes to win a category.</li><br />
            <li>First to Third of every category is claimed Winner and takes home a customized plaque, a Special Citation, a Certificate and a Medal.</li><br />
            <li>Overall Winner (that's the Nominee with the highest number of votes in all) takes home a CASH PRIZE attached to the Category Prizes.</li><br />
            <li>Digital Promotion: A live interview with a media company will be arranged for the Overall winner (thats the Nominee who wins the OVERALL CASH PRIZE through out the event).</li><br />
            <li>Nominees that reach 2000+ votes but do not win their category gain a Special Citation a Customized Plaque, a Certificate and a Medal.</li>
            </ul>
          </div>
          <div>
            <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10 mb-2'>Happening Live</h3>
            <div className='grid gap-2'>
              <img src={hap1} alt="" />
              <img src={hap2} alt="" />
            </div>
            <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10 mb-2'>Special Guests</h3>
            <div className='grid gap-2'>
              <img src={spg1} alt="" />
              <img src={spg2} alt="" />
              <img src={spg3} alt="" />
              <img src={spg4} alt="" />
            </div>
            <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10 mb-2'>Performances</h3>
            <div className='grid gap-2'>
              <img src={perf1} alt="" />
              <img src={perf2} alt="" />
            </div>
          </div>
        </div>}

        {eventName === 'West Africa Event Planners Awards and Honors' && <div>
          <div>
          <h3 className='bg-amber-600 text-white font-bold grid justify-center p-2 rounded-md uppercase'>How to file for nominations</h3>
            <img src={waecoming} alt="" className='mt-2' />
            <p className='text-lg mt-2'>Send the listed details to our official whatsapp numbers (<span className='font-bold text-amber-600'>+233266862270 / +233533563345</span>)</p>
            <ul className='text-lg bullet-list mt-2'>
              <li>Name</li>
              <li>Category</li>
              <li>Proof of work</li>
              <li>Professional Pictures</li>
              <li>Social Media Handles</li>
            </ul>
          </div>
          <div>
            <h3 className='bg-amber-600 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Categories</h3>
            <img src={waecategories} alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>West Africa Best Event Planner of the Year 23/24</li>
            <li>West Africa Best Event Decorating Brand of the Year 23/24</li>
            <li>West Africa Best Event Local Bar of the Year ack 23/24</li>
            <li>West Africa Best Event Catering Service of the Year 23/24</li>
            <li>West Africa Best Event Bakery of the Year 23/24</li>
            <li>West Africa Best Event Baloon of the Year 23/24</li>
            <li>West Africa Best Event Florist of the Year 23/24</li>
            <li>West Africa Best Event BackDrop of the Year 23/24</li>
            <li>West Africa Best Event MC of the Year 23/24</li>
          </ul>
          </div>
          <div>
          <h3 className='bg-amber-600 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Criteria for Winners</h3>
            <img src={waecriteria} alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>Nominee must have 1000+ votes to win a category.</li><br />
            <li>First to Third of every category is claimed Winner and takes home a customized plaque, a Special Citation, a Certificate and a Medal.</li><br />
            <li>Overall Winner (that's the Nominee with the highest number of votes in all) takes home a CASH PRIZE attached to the Category Prizes.</li><br />
            <li>Digital Promotion :A live interview with a media company will be arranged for the Overall winner (thats the Nominee who wins the OVERALL CASH PRIZE through out the event).</li><br />
            <li>Nominees that reach 2000+ votes but do not win their category gain a Special Citation a Customized Plaque, a Certificate and a Medal.</li>
            </ul>
          </div>
        </div>}

        {eventName === 'West Africa Beauticians Symposium Awards' && <div>
          <div>
          <h3 className='bg-amber-400 text-white font-bold grid justify-center p-2 rounded-md uppercase'>How to file for nominations</h3>
            <img src={wabfiling} alt="" className='mt-2' />
            <p className='text-lg mt-2'>Send the listed details to our official whatsapp numbers (<span className='font-bold text-amber-400'>+233266862270 / +233533563345</span>)</p>
            <ul className='text-lg bullet-list mt-2'>
              <li>Name</li>
              <li>Category</li>
              <li>Proof of work</li>
              <li>Professional Pictures</li>
              <li>Social Media Handles</li>
            </ul>
          </div>
          <div>
            <h3 className='bg-amber-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Categories</h3>
            <img src={wabcategories} alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>West Africa Best Makeup Artist of the Year 23/24</li>
            <li>West Africa Best Pro Makeup Artist of the Year 23/24</li>
            <li>West Africa Best TV/Film Makeup Artist of the Year 23/24</li>
            <li>West Africa Best Celebrity Makeup Artist of the Year 23/24</li>
            <li>West Africa Best SFX Makeup Artist of the Year 23/24</li>
            <li>West Africa Best Best International Makeup Artist of the Year 23/24</li>
            <li>West Africa Best Recommended Salon of the Year 23/24</li>
            <li>West Africa Best Salon Product of the Year 23/24</li>
            <li>West Africa Best Salon of the Year 23/24</li>
            <li>West Africa Best Beauty CEO of the Year 23/24</li>
            <li>West Africa Best Organic Skincare Brand of the Year 23/24</li>
            <li>West Africa Best Selling Skincare/Costmetic of the Year 23/24</li>
          </ul>
          <h3 className='bg-amber-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Hair Category</h3>
            <img src={wabcategory} alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>West Africa Best Bridal Hairstyle of the Year 23/24</li>
            <li>West Africa Best Hair Extension Brand of the Year 23/24</li>
            <li>West Africa Best Braids Specialist of the Year 23/24</li>
            <li>West Africa Best Wig Maker of the Year 23/24</li>
            <li>West Africa Best Professional Hair Stylist of the Year 23/24</li>
            <li>West Africa Best Male Hairdresser of the Year 23/24</li>
            <li>West Africa Best TV/Film Hairdresser of the Year 23/24</li>
            <li>West Africa Best Spa/Therapy Brand of the Year 23/24</li>
            <li>West Africa Best Hair Colorist of the year 23/24</li>
            <li>West Africa Best Nail Technician of the Year 23/24</li>
            <li>West Africa Best Eyelash/Eyebrows Specialist of the Year 23/24</li>
            <li>West Africa Best Dreadlocks Stylist of the Year 23/24</li>
          </ul>
          </div>
          <div>
          <h3 className='bg-amber-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Criteria for Winners</h3>
            <img src={wabcriteria} alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>Nominee must have 1000+ votes to win a category.</li><br />
            <li>First to Third of every category is claimed Winner and takes home a customized plaque, a Special Citation, a Certificate and a Medal.</li><br />
            <li>Overall Winner (that's the Nominee with the highest number of votes in all) takes home a CASH PRIZE attached to the Category Prizes.</li><br />
            <li>Digital Promotion: A live interview with a media company will be arranged for the Overall winner (thats the Nominee who wins the OVERALL CASH PRIZE through out the event).</li><br />
            <li>Nominees that reach 2000+ votes but do not win their category gain a Special Citation a Customized Plaque, a Certificate and a Medal.</li>
            </ul>
          </div>
          <div>
          <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Criteria for Winners</h3>
            <img src={wasahcriteria} alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>Nominee must have 1000+ votes to win a category.</li><br />
            <li>First to Third of every category is claimed Winner and takes home a customized plaque, a Special Citation, a Certificate and a Medal.</li><br />
            <li>Overall Winner (that's the Nominee with the highest number of votes in all) takes home a CASH PRIZE attached to the Category Prizes.</li><br />
            <li>Digital Promotion: A live interview with a media company will be arranged for the Overall winner (thats the Nominee who wins the OVERALL CASH PRIZE through out the event).</li><br />
            <li>Nominees that reach 2000+ votes but do not win their category gain a Special Citation a Customized Plaque, a Certificate and a Medal.</li>
            </ul>
          </div>
          <div>
            <h3 className='bg-amber-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10 mb-2'>Happening Live</h3>
            <div className='grid gap-2'>
              <img src={hap1} alt="" />
              <img src={hap2} alt="" />
            </div>
            <h3 className='bg-amber-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10 mb-2'>Special Guests</h3>
            <div className='grid gap-2'>
              <img src={spg1} alt="" />
              <img src={spg2} alt="" />
              <img src={spg3} alt="" />
              <img src={spg4} alt="" />
            </div>
            <h3 className='bg-amber-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10 mb-2'>Performances</h3>
            <div className='grid gap-2'>
              <img src={perf1} alt="" />
              <img src={perf2} alt="" />
            </div>
          </div>
        </div>}

        {eventName === 'West Africa Fashion Awards' && <div>
          <div>
          <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase'>How to file for nominations</h3>
            <img src={waffiling} alt="" className='mt-2' />
            <p className='text-lg mt-2'>Send the listed details to our official whatsapp numbers (<span className='font-bold text-green-400'>+233266862270 / +233533563345</span>)</p>
            <ul className='text-lg bullet-list mt-2'>
              <li>Name</li>
              <li>Category</li>
              <li>Proof of work</li>
              <li>Professional Pictures</li>
              <li>Social Media Handles</li>
            </ul>
          </div>
          <div>
          <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Categories</h3>
            <img src={wafcategories} alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>West Africa Best Male Fashion of the Year 23/24</li>
            <li>West Africa Best Female Fashion of the Year 23/24</li>
            <li>West Africa Best  Fashion of the Year 23/24</li>
            <li>West Africa Best Luxury Fashion Store of the of the Year 23/24</li>
            <li>West Africa Best Luxury Bride Costume Designer of the Year 23/24</li>
            <li>West Africa Best Luxury Groom Costume Designer of the Year 23/24</li>
            <li>West Africa Best Bridal/Groom Luxury store of the Year 23/24</li>
            <li>West Africa Best Made Bridal Fan of the Year 23/24</li>
            <li>West Africa Best Fashion Milliner of the year 23/24</li>
            <li>West Africa Best Fashion Turban Doctor of the Year 23/24</li>
            <li>West Africa Best Men Slippers/Shoe Brand of the Year 23/24</li>
            <li>West Africa Best Women Slippers/Footwear Brand of the Year 23/24</li>
            <li>West Africa Best Fashion Online Store of the Year 23/24</li>
            <li>West Africa Best Non Affiliated Brands Store of the Year 23/24</li>
            <li>West Africa Best Jewelry Accessories of the Year 23/24</li>
          </ul>
          </div>
          <div>
          <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Criteria for Winners</h3>
            <img src='' alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>Nominee must have 1000+ votes to win a category.</li><br />
            <li>First to Third of every category is claimed Winner and takes home a customized plaque, a Special Citation, a Certificate and a Medal.</li><br />
            <li>Overall Winner (that's the Nominee with the highest number of votes in all) takes home a CASH PRIZE attached to the Category Prizes.</li><br />
            <li>Digital Promotion: A live interview with a media company will be arranged for the Overall winner (thats the Nominee who wins the OVERALL CASH PRIZE through out the event).</li><br />
            <li>Nominees that reach 2000+ votes but do not win their category gain a Special Citation a Customized Plaque, a Certificate and a Medal.</li>
            </ul>
          </div>
          <div>
          <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10'>Criteria for Winners</h3>
            <img src={wasahcriteria} alt="" className='mt-2' />
            <ul className='text-lg bullet-list mt-2'>
            <li>Nominee must have 1000+ votes to win a category.</li><br />
            <li>First to Third of every category is claimed Winner and takes home a customized plaque, a Special Citation, a Certificate and a Medal.</li><br />
            <li>Overall Winner (that's the Nominee with the highest number of votes in all) takes home a CASH PRIZE attached to the Category Prizes.</li><br />
            <li>Digital Promotion: A live interview with a media company will be arranged for the Overall winner (thats the Nominee who wins the OVERALL CASH PRIZE through out the event).</li><br />
            <li>Nominees that reach 2000+ votes but do not win their category gain a Special Citation a Customized Plaque, a Certificate and a Medal.</li>
            </ul>
          </div>
          <div>
            <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10 mb-2'>Happening Live</h3>
            <div className='grid gap-2'>
              <img src={hap1} alt="" />
              <img src={hap2} alt="" />
            </div>
            <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10 mb-2'>Special Guests</h3>
            <div className='grid gap-2'>
              <img src={spg1} alt="" />
              <img src={spg2} alt="" />
              <img src={spg3} alt="" />
              <img src={spg4} alt="" />
            </div>
            <h3 className='bg-green-400 text-white font-bold grid justify-center p-2 rounded-md uppercase mt-10 mb-2'>Performances</h3>
            <div className='grid gap-2'>
              <img src={perf1} alt="" />
              <img src={perf2} alt="" />
            </div>
          </div>
          </div>}




        {/* Event Gallery */}
         <div className="mt-6">
         {eventGallery && <h3 className="text-xl font-semibold mb-2">Event Gallery</h3>}
          <div className='grid grid-cols-2 gap-2'>
            {eventGallery && eventGallery.map((img, index) => (
              <img key={index} src={img} />
            ))}
          </div>

          {/* Guests of Honor */}
          {gallery && <div>
            <h4 className="text-lg font-semibold mb-2">Guests of Honor</h4>
            <div className="grid grid-cols-2 gap-2">
              {gallery && gallery.guestsOfHonor && gallery.guestsOfHonor.map((image, index) => (
                <img key={index} src={image} alt={`Guest of Honor ${index + 1}`} className="object-cover mr-2 rounded" />
              ))}
            </div>
          </div>}

          {/* Winners */}
           <div className="mt-4">
            {gallery && <h4 className="text-lg font-semibold mb-2">Winners</h4>}
            <div className="grid grid-cols-2 gap-2">
              {gallery && gallery.winners && gallery.winners.map((image, index) => (
                <img key={index} src={image} alt={`Winner ${index + 1}`} className="object-cover mr-2 rounded" />
              ))}
            </div>
              </div>
          </div>

        {highlights && <div>
          <h1 className='text-3xl mt-10'>Event Highlights</h1>
          <div className='-mt-14'>
            {highlights && highlights.map((highlight, index) => (
              <ReactPlayer key={index} url={highlight} controls={true} loop={true} width="100%" aspect-ratio="16/9" />
            ))}
          </div>
            </div>}

        {/* Media Partners */}
        {mediaPartners && <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Media Partners</h3>
          <div>
            {mediaPartners && mediaPartners.map((partner, index) => (
              <img key={index} src={partner} />
            ))}
          </div>
        </div>}

        {/* Sponsors */}
        {sponsors && <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Sponsors</h3>
          <div>
            {sponsors && sponsors.map((sponsor, index) => (
              <img key={index} src={sponsor} />
            ))}
          </div>
        </div>}

        {/* Social Media Handles */}
        {socialMediaHandles && <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Social Media Handles</h3>
          <ul className="grid grid-rows-1">
            <li>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <span className="ml-2">{socialMediaHandles.facebook}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <span className="ml-2">{socialMediaHandles.twitter}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <span className="ml-2">{socialMediaHandles.instagram}</span>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default EventDetail;
