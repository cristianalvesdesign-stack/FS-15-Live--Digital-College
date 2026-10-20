import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText} from '@primereact/ui/inputtext';
import VisaCard from "../../assets/images/brands/Visa.png"
import GPayCard from "../../assets/images/brands/g-pay.png"
import Mastercard from "../../assets/images/brands/Mastercard.png"
import PaypalCard from "../../assets/images/brands/Paypal.png"
import PayCard from "../../assets/images/brands/Pay.png"

function AppFooter () {
    const iconsWidthAndHeight = 20
    return (
         <div className='flex justify-center ss-bg-gray mt-40'>
            <footer className='w-300 pb-8 pt-30 relative'>
                <div className='bg-black py-6 px-14 flex justify-between items-center rounded-2xl absolute -top-20 w-full'>
                    <h4 className='text-white! text-4xl!'>
                        STAY UP TO DATE ABOUT <br/> 
                        OUR LATEST OFFERS
                    </h4>
                    <form className='w-80'>
                        <InputGroup.Root>
                            <InputGroup.Addon className="rounded-l-4xl!">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 5.5h-8a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/><path d="m4.5 8.5l5 3l5-3m2-5v4m-2-2h4"/></g></svg>
                            </InputGroup.Addon>
                            <InputText placeholder="Digite seu e-mail aqui!" className="rounded-r-4xl!"/>
                        </InputGroup.Root>
                        <button className="bg-white! w-full py-3 rounded-4xl! mt-3"> Subscribe to Newsletter </button>
                    </form>
                </div>
        <div className='border-b-1 border-gray-50 pb-8 flex gap-15'>
          <div className='w-75'>
            <h3 className='mb-8 text-3xl!'>SHOP.CO</h3>
                <p className='mb-8 text-sm!'>
                    We have clothes that suits your style and<br /> 
                    which you´re proud to wear. From<br /> women to men.
                </p>
            <div className='flex gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width={iconsWidthAndHeight} height={iconsWidthAndHeight} viewBox="0 0 20 20"><path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={iconsWidthAndHeight} height={iconsWidthAndHeight} viewBox="0 0 20 20"><path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h14c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2M9.984 15.523a5.54 5.54 0 0 0 5.538-5.539c0-.338-.043-.664-.103-.984H17v7.216a.69.69 0 0 1-.693.69H3.693a.69.69 0 0 1-.693-.69V9h1.549c-.061.32-.104.646-.104.984a5.54 5.54 0 0 0 5.539 5.539M6.523 9.984a3.461 3.461 0 1 1 6.922 0a3.461 3.461 0 0 1-6.922 0M16.307 6h-1.615A.694.694 0 0 1 14 5.308V3.691c0-.382.31-.691.691-.691h1.615c.384 0 .694.309.694.691v1.616c0 .381-.31.693-.693.693"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={iconsWidthAndHeight} height={iconsWidthAndHeight} viewBox="0 0 20 20"><path fill="currentColor" d="M17.316 6.246q.011.244.011.488c0 4.99-3.797 10.742-10.74 10.742c-2.133 0-4.116-.625-5.787-1.697a7.58 7.58 0 0 0 5.588-1.562a3.78 3.78 0 0 1-3.526-2.621a3.86 3.86 0 0 0 1.705-.065a3.78 3.78 0 0 1-3.028-3.703v-.047a3.8 3.8 0 0 0 1.71.473a3.775 3.775 0 0 1-1.168-5.041a10.72 10.72 0 0 0 7.781 3.945a3.8 3.8 0 0 1-.097-.861a3.773 3.773 0 0 1 3.774-3.773a3.77 3.77 0 0 1 2.756 1.191a7.6 7.6 0 0 0 2.397-.916a3.8 3.8 0 0 1-1.66 2.088a7.6 7.6 0 0 0 2.168-.594a7.6 7.6 0 0 1-1.884 1.953"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={iconsWidthAndHeight} height={iconsWidthAndHeight} viewBox="0 0 20 20"><path fill="currentColor" d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799m4.526-4.683c.149-.365.155-2.439-.635-4.426c0 0-1.811.199-4.551 2.08c-.575-.16-1.548-.238-2.519-.238c-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002l1.732-.002c1.506 0 7.467-.115 7.467-7.301c0-1.652-.566-2.863-1.494-3.871m-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115c0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531c.735.676 1.045 1.49 1.045 2.369c0 3.666-2.937 4.115-6.709 4.115m-3.207-5.606c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.301-.807 1.301-1.801c0-.992-.582-1.799-1.301-1.799"/></svg>

            </div>
          </div>
          <div className='w-40'>
            <p className='mb-8 text-1xl! font-bold! text-black! tracking-[0.3rem]'>COMPANY</p>
                <ul className="flex flex-col gap-2.5">
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Works</a>
                    </li>
                    <li>
                        <a href="">Career</a>
                    </li>
                </ul>
          </div>
          <div className='w-40'>
            <p className='mb-8 text-1xl!font-bold! text-black! tracking-[0.3rem]'>HELP</p>
                <ul className="flex flex-col gap-2.5">
                    <li>
                        <a href="">Costumer Support</a>
                    </li>
                    <li>
                        <a href="">Delivery Details</a>
                    </li>
                    <li>
                        <a href="">Terms & Condictions</a>
                    </li>
                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                </ul>
          </div>
          <div className='w-40'>
            <p className='mb-8 text-1xl!font-bold! text-black! tracking-[0.3rem]'>FAQ</p>
                <ul className="flex flex-col gap-2.5">
                    <li>
                        <a href="">Account</a>
                    </li>
                    <li>
                        <a href="">Manage Deliveries</a>
                    </li>
                    <li>
                        <a href="">Orders</a>
                    </li>
                    <li>
                    <a href="">Payments</a>
                    </li>
                </ul>
          </div>
          <div className='w-40'>
            <p className='mb-8 text-1xl!font-bold! text-black! tracking-[0.3rem]'>RESOURCES</p>
                <ul className="flex flex-col gap-2.5">
                    <li>
                        <a href="">Free eBooks</a>
                    </li>
                    <li>
                        <a href="">Development Tutorial</a>
                    </li>
                    <li>
                        <a href="">How to - Blog</a>
                    </li>
                    <li>
                        <a href="">Youtube Playlist</a>
                    </li>
                </ul>
          </div>
          </div>
          <div className="mt-4 pb-10 flex justify-between">
            <p>Shop.Co © 2000-2023, All Rights Reserved</p>

            <div className="flex gap-2 items-center">
                <div className="bg-white p-2 rounded-sm w-10">
                    <img src={VisaCard} alt="" className="" />
                </div>

                <div className="bg-white p-2 rounded-sm w-10! flex! justify-center!">
                    <img src={Mastercard} alt="" className="" />
                </div>

                <div className="bg-white p-2 rounded-sm w-10">
                    <img src={PaypalCard} alt="" className="" />
                </div>

                <div className="bg-white p-2 rounded-sm w-10">
                    <img src={PayCard} alt="" className="" />
            </div>
            <div className="bg-white p-2 rounded-sm w-10">
                <img src={GPayCard} alt="" className="" />
            </div>
            </div>
        </div>
        </footer>
      </div>
    );
}

export default AppFooter