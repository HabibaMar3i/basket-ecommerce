import footerImage from '../../assets/Footer_Image.png'
import footergoogle from '../../assets/google_play_footer.png'
import footerapp from '../../assets/app_store_footer.png'
import footerpayment from '../../assets/payment_footer.png'
export default function Footer() {
    return <>
        {/* discount section */}
        <section className="w-full max-w-[1536px] h-auto min-h-[353.38px] rotate-0 opacity-100 bg-[#35AFA0] mx-auto">
            {/* main section */}
            <main className='flex flex-col lg:flex-row gap-8 lg:gap-50 justify-center items-center lg:items-start relative lg:top-19 pt-8 lg:py-0 px-4 lg:px-0'>
                {/* left section */}
                <section className="w-full lg:w-auto text-center lg:text-left">
                    <div className='lg:flex items-center gap-1 '>
                        <span className="font-inter font-light text-base leading-[19.2px] tracking-normal align-middle underline decoration-solid text-white decoration-auto underline-offset-3 ">$20 discount</span>  <h2 className="text-[#FFFFFF] font-inter font-light text-base leading-[19.2px] tracking-normal align-middle "> for your first order</h2>
                    </div>
                    <h1 className="font-inter font-semibold text-[26px] leading-[31.2px] tracking-normal align-middle text-white mt-2">Join our newsletter and get...</h1>
                    <p className="w-full lg:w-[287.67px] h-auto lg:h-10 rotate-0 opacity-50 font-inter font-normal text-[13px] leading-6 tracking-normal align-middle text-white mt-4 mx-auto lg:mx-0">Join our email subscription now to get updates
                        on promotions and coupons.</p>
                    <form className="relative w-full lg:w-auto mt-6 lg:mt-8">
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email address"
                            className="w-full lg:w-[470px] h-[62px] rounded border border-[#E4E5EE] bg-white font-inter font-normal text-[14px] leading-[100%] tracking-[-0.3px] align-middle text-[#9595A9] ps-13 pl-12 pr-28 lg:pr-28 outline-none transition-all duration-300 focus:border-[#35AFA0] focus:ring-2 focus:ring-[#35AFA0]/40 focus:shadow-md" />
                        <i className="fa-regular fa-envelope text-[#C2C2D3] text-xl absolute top-1/2 transform -translate-y-1/2 left-4"></i>
                        <button
                            type="submit"
                            className="w-full lg:w-[102.84px] h-[54px] absolute lg:absolute lg:top-1 lg:left-91 top-full mt-2 lg:mt-0 cursor-pointer rounded bg-[#35AFA0] font-inter font-medium text-[13px] leading-[19.5px] text-center text-white hover:bg-[#2e978a] transition-colors duration-300">
                            Subscribe
                        </button>
                    </form>
                </section>
                {/* right section {image} */}
                <img src={footerImage} className='w-full max-w-[400px] lg:max-w-none lg:w-[510px] h-auto lg:h-[277.44px] rotate-0 opacity-100 mt-8 lg:mt-0' alt="discount image" />
            </main>
        </section>
        {/* info of website section 1*/}
        <section className='w-full max-w-[1521px] min-h-[103px] rotate-0 opacity-100 bg-[#F7F8FD] flex flex-col items-center mx-auto px-4 lg:px-0'>
            {/* section 1 */}
            <section className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-15 py-8 md:py-7 w-full'>
                <div className='flex items-center gap-3 w-full md:w-auto justify-center md:justify-start'>
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.288 9.482V7.37L11.594 3.432V0H1.782V3.432L0 7.37V22H19.756V9.482H13.288ZM16.544 18.062C16.1627 17.7247 15.73 17.556 15.246 17.556C14.762 17.556 14.3293 17.7247 13.948 18.062C13.5813 17.7247 13.156 17.556 12.672 17.556C12.4813 17.556 12.2613 17.5927 12.012 17.666V13.772H18.48V17.666C18.2307 17.5927 18.0107 17.556 17.82 17.556C17.336 17.556 16.9107 17.7247 16.544 18.062ZM18.48 12.474H12.012V10.78H18.48V12.474ZM10.736 9.482V18.15H1.276V8.162H11.99V9.482H10.736ZM11.66 6.864H1.65L2.838 4.202H10.516L11.66 6.864ZM3.08 1.298H10.296V2.926H3.08V1.298ZM1.276 20.702V19.448H10.736V20.702H1.276ZM12.012 20.702V19.492C12.012 19.316 12.078 19.1657 12.21 19.041C12.342 18.9163 12.496 18.854 12.672 18.854C12.848 18.854 12.9983 18.9163 13.123 19.041C13.2477 19.1657 13.31 19.316 13.31 19.492V20.702H12.012ZM14.608 20.702V19.492C14.608 19.316 14.6703 19.1657 14.795 19.041C14.9197 18.9163 15.07 18.854 15.246 18.854C15.422 18.854 15.5723 18.9163 15.697 19.041C15.8217 19.1657 15.884 19.316 15.884 19.492V20.702H14.608ZM18.48 20.702H17.182V19.492C17.182 19.316 17.2443 19.1657 17.369 19.041C17.4937 18.9163 17.644 18.854 17.82 18.854C17.996 18.854 18.15 18.9163 18.282 19.041C18.414 19.1657 18.48 19.316 18.48 19.492V20.702Z" fill="#202435" />
                    </svg>
                    <h1 className='font-inter font-medium text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#202435]'>Everyday fresh products</h1>
                </div>

                <div className='bg-[#E4E5EE] w-10 md:w-[0.5px] h-[0.5px] md:h-10'></div>

                <div className='flex items-center gap-3 w-full md:w-auto justify-center md:justify-start'>
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.61 9.70207C16.1113 9.70207 15.6493 9.82673 15.224 10.0761C14.7987 10.3254 14.4613 10.6664 14.212 11.0991C13.9627 11.5317 13.838 11.9974 13.838 12.4961C13.838 12.9947 13.9627 13.4567 14.212 13.8821C14.4613 14.3074 14.7987 14.6447 15.224 14.8941C15.6493 15.1434 16.1113 15.2681 16.61 15.2681C17.1087 15.2681 17.5707 15.1434 17.996 14.8941C18.4213 14.6447 18.7587 14.3074 19.008 13.8821C19.2573 13.4567 19.382 12.9947 19.382 12.4961C19.382 11.9974 19.2573 11.5354 19.008 11.1101C18.7587 10.6847 18.4213 10.3437 17.996 10.0871C17.5707 9.8304 17.1087 9.70207 16.61 9.70207ZM16.61 13.8821C16.2433 13.8821 15.9207 13.7427 15.642 13.4641C15.3633 13.1854 15.224 12.8591 15.224 12.4851C15.224 12.1111 15.3597 11.7884 15.631 11.5171C15.9023 11.2457 16.2287 11.1101 16.61 11.1101C16.9913 11.1101 17.3177 11.2457 17.589 11.5171C17.8603 11.7884 17.996 12.1147 17.996 12.4961C17.996 12.8774 17.8603 13.2037 17.589 13.4751C17.3177 13.7464 16.9913 13.8821 16.61 13.8821ZM7.15 9.70207C6.65133 9.70207 6.18933 9.82673 5.764 10.0761C5.33867 10.3254 5.00133 10.6664 4.752 11.0991C4.50267 11.5317 4.378 11.9974 4.378 12.4961C4.378 12.9947 4.50267 13.4567 4.752 13.8821C5.00133 14.3074 5.33867 14.6447 5.764 14.8941C6.18933 15.1434 6.65133 15.2681 7.15 15.2681C7.64867 15.2681 8.11067 15.1434 8.536 14.8941C8.96133 14.6447 9.29867 14.3074 9.548 13.8821C9.79733 13.4567 9.922 12.9947 9.922 12.4961C9.922 11.9974 9.79733 11.5354 9.548 11.1101C9.29867 10.6847 8.96133 10.3437 8.536 10.0871C8.11067 9.8304 7.64867 9.70207 7.15 9.70207ZM7.15 13.8821C6.76867 13.8821 6.44233 13.7464 6.171 13.4751C5.89967 13.2037 5.764 12.8774 5.764 12.4961C5.764 12.1147 5.89967 11.7884 6.171 11.5171C6.44233 11.2457 6.76867 11.1101 7.15 11.1101C7.53133 11.1101 7.85767 11.2457 8.129 11.5171C8.40033 11.7884 8.536 12.1111 8.536 12.4851C8.536 12.8591 8.40033 13.1854 8.129 13.4641C7.85767 13.7427 7.53133 13.8821 7.15 13.8821ZM18.48 1.78207C18.4213 1.66473 18.337 1.5694 18.227 1.49607C18.117 1.42273 17.996 1.38607 17.864 1.38607H14.212V2.77207H17.446L19.316 6.53407L20.57 5.91807L18.48 1.78207ZM5.06 11.8141H2.662C2.47133 11.8141 2.30633 11.8801 2.167 12.0121C2.02767 12.1441 1.958 12.3091 1.958 12.5071C1.958 12.7051 2.02767 12.8701 2.167 13.0021C2.30633 13.1341 2.47133 13.2001 2.662 13.2001H5.06C5.25067 13.2001 5.41567 13.1341 5.555 13.0021C5.69433 12.8701 5.764 12.7087 5.764 12.5181C5.764 12.3274 5.69433 12.1624 5.555 12.0231C5.41567 11.8837 5.25067 11.8141 5.06 11.8141ZM21.846 7.56807L20.482 5.83007C20.3353 5.6394 20.1593 5.54407 19.954 5.54407H14.916V0.704066C14.916 0.5134 14.8463 0.3484 14.707 0.209066C14.5677 0.0697336 14.4027 6.67572e-05 14.212 6.67572e-05H2.662C2.47133 6.67572e-05 2.30633 0.0660667 2.167 0.198067C2.02767 0.330067 1.958 0.495067 1.958 0.693067C1.958 0.891067 2.024 1.05607 2.156 1.18807C2.288 1.32007 2.45667 1.38607 2.662 1.38607H13.53V6.24807C13.53 6.43873 13.596 6.60007 13.728 6.73207C13.86 6.86407 14.0213 6.93007 14.212 6.93007H19.602L20.614 8.25007V11.8141H18.7C18.5093 11.8141 18.3443 11.8801 18.205 12.0121C18.0657 12.1441 17.996 12.3091 17.996 12.5071C17.996 12.7051 18.0657 12.8701 18.205 13.0021C18.3443 13.1341 18.5093 13.2001 18.7 13.2001H21.318C21.5087 13.2001 21.67 13.1341 21.802 13.0021C21.934 12.8701 22 12.7087 22 12.5181V8.00807C22 7.83207 21.9487 7.6854 21.846 7.56807ZM5.016 8.29407H1.826C1.63533 8.29407 1.474 8.36373 1.342 8.50307C1.21 8.6424 1.144 8.8074 1.144 8.99807C1.144 9.18873 1.21 9.35007 1.342 9.48207C1.474 9.61407 1.63533 9.68007 1.826 9.68007H5.016C5.20667 9.68007 5.37167 9.61407 5.511 9.48207C5.65033 9.35007 5.72 9.18873 5.72 8.99807C5.72 8.8074 5.65033 8.6424 5.511 8.50307C5.37167 8.36373 5.20667 8.29407 5.016 8.29407ZM6.6 5.56607H0.704C0.513333 5.56607 0.348333 5.63573 0.209 5.77507C0.0696667 5.9144 0 6.0794 0 6.27007C0 6.46073 0.0696667 6.62207 0.209 6.75407C0.348333 6.88607 0.513333 6.95207 0.704 6.95207H6.6C6.79067 6.95207 6.95567 6.88607 7.095 6.75407C7.23433 6.62207 7.304 6.46073 7.304 6.27007C7.304 6.0794 7.23433 5.9144 7.095 5.77507C6.95567 5.63573 6.79067 5.56607 6.6 5.56607ZM7.744 2.86007H1.826C1.63533 2.86007 1.474 2.92607 1.342 3.05807C1.21 3.19007 1.144 3.3514 1.144 3.54207C1.144 3.73273 1.21 3.89773 1.342 4.03707C1.474 4.1764 1.63533 4.24607 1.826 4.24607H7.744C7.93467 4.24607 8.096 4.1764 8.228 4.03707C8.36 3.89773 8.426 3.73273 8.426 3.54207C8.426 3.3514 8.36 3.19007 8.228 3.05807C8.096 2.92607 7.93467 2.86007 7.744 2.86007Z" fill="#202435" />
                    </svg>
                    <h1 className='font-inter font-medium text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#202435]'>Free delivery for order over $70</h1>
                </div>

                <div className='bg-[#E4E5EE] w-10 md:w-[0.5px] h-[0.5px] md:h-10'></div>

                <div className='flex items-center gap-3 w-full md:w-auto justify-center md:justify-start'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1186 11.286C20.0159 11.0953 20.0159 10.9047 20.1186 10.714L20.9326 9.042C21.1673 8.57267 21.2039 8.09233 21.0426 7.601C20.8813 7.10967 20.5659 6.73933 20.0966 6.49L18.4466 5.632C18.2559 5.52933 18.1459 5.37533 18.1166 5.17L17.7866 3.322C17.6986 2.80867 17.4456 2.40167 17.0276 2.101C16.6096 1.80033 16.1439 1.68667 15.6306 1.76L13.7826 2.024C13.5773 2.05333 13.4013 1.99467 13.2546 1.848L11.9126 0.549999C11.5459 0.183334 11.1023 0 10.5816 0C10.0609 0 9.60993 0.183334 9.22859 0.549999L7.88659 1.848C7.73993 1.99467 7.56393 2.05333 7.35859 2.024L5.51059 1.76C4.99726 1.68667 4.53159 1.80033 4.11359 2.101C3.69559 2.40167 3.44259 2.80867 3.35459 3.322L3.02459 5.17C2.99526 5.37533 2.88526 5.52933 2.69459 5.632L1.04459 6.49C0.575259 6.73933 0.259926 7.10967 0.0985926 7.601C-0.0627408 8.09233 -0.0260741 8.57267 0.208593 9.042L1.04459 10.714C1.14726 10.9047 1.14726 11.0953 1.04459 11.286L0.208593 12.958C-0.0260741 13.4273 -0.0627408 13.904 0.0985926 14.388C0.259926 14.872 0.575259 15.2387 1.04459 15.488L2.69459 16.368C2.88526 16.4707 2.99526 16.6247 3.02459 16.83L3.35459 18.678C3.42793 19.1327 3.64059 19.5103 3.99259 19.811C4.34459 20.1117 4.75526 20.262 5.22459 20.262C5.34193 20.262 5.43726 20.2547 5.51059 20.24L7.35859 19.976C7.56393 19.9467 7.73993 20.0053 7.88659 20.152L9.22859 21.45C9.59526 21.8167 10.0426 22 10.5706 22C11.0986 22 11.5459 21.8167 11.9126 21.45L13.2546 20.152C13.4013 20.0053 13.5773 19.9467 13.7826 19.976L15.6306 20.24C16.1439 20.3133 16.6096 20.1997 17.0276 19.899C17.4456 19.5983 17.6986 19.1913 17.7866 18.678L18.1166 16.83C18.1459 16.6247 18.2559 16.4707 18.4466 16.368L20.0966 15.488C20.5659 15.2387 20.8813 14.872 21.0426 14.388C21.2039 13.904 21.1673 13.4273 20.9326 12.958L20.1186 11.286ZM19.5026 14.388L17.8526 15.246C17.5886 15.3927 17.3723 15.5833 17.2036 15.818C17.0349 16.0527 16.9213 16.3167 16.8626 16.61L16.5546 18.458C16.5253 18.634 16.4373 18.7733 16.2906 18.876C16.1439 18.9787 15.9826 19.0153 15.8066 18.986L13.9586 18.722C13.6799 18.678 13.3976 18.7037 13.1116 18.799C12.8256 18.8943 12.5799 19.0447 12.3746 19.25L11.0326 20.548C10.9153 20.6653 10.7649 20.724 10.5816 20.724C10.3983 20.724 10.2479 20.6653 10.1306 20.548L8.78859 19.25C8.39259 18.8833 7.94526 18.7 7.44659 18.7L7.18259 18.722L5.33459 18.986C5.15859 19.0153 4.99726 18.9787 4.85059 18.876C4.70393 18.7733 4.61593 18.634 4.58659 18.458L4.27859 16.61C4.21993 16.3167 4.10626 16.0527 3.93759 15.818C3.76893 15.5833 3.55259 15.3927 3.28859 15.246L1.63859 14.388C1.47726 14.3147 1.37093 14.1937 1.31959 14.025C1.26826 13.8563 1.27926 13.6913 1.35259 13.53L2.16659 11.836C2.29859 11.572 2.36459 11.2933 2.36459 11C2.36459 10.7067 2.29859 10.428 2.16659 10.164L1.35259 8.47C1.27926 8.30867 1.26826 8.14367 1.31959 7.975C1.37093 7.80633 1.47726 7.68533 1.63859 7.612L3.28859 6.754C3.55259 6.60733 3.76893 6.41667 3.93759 6.182C4.10626 5.94733 4.21993 5.68333 4.27859 5.39L4.58659 3.542C4.61593 3.366 4.70393 3.22667 4.85059 3.124C4.99726 3.02133 5.15859 2.98467 5.33459 3.014L7.18259 3.278C7.46126 3.322 7.74359 3.29633 8.02959 3.201C8.31559 3.10567 8.56859 2.95533 8.78859 2.75L10.1306 1.452C10.2479 1.33467 10.3983 1.276 10.5816 1.276C10.7649 1.276 10.9153 1.33467 11.0326 1.452L12.3746 2.75C12.5799 2.95533 12.8256 3.10567 13.1116 3.201C13.3976 3.29633 13.6799 3.322 13.9586 3.278L15.8066 3.014C15.9826 2.98467 16.1439 3.02133 16.2906 3.124C16.4373 3.22667 16.5253 3.366 16.5546 3.542L16.8626 5.39C16.9213 5.68333 17.0349 5.94733 17.2036 6.182C17.3723 6.41667 17.5886 6.60733 17.8526 6.754L19.5026 7.612C19.6639 7.68533 19.7703 7.80633 19.8216 7.975C19.8729 8.14367 19.8619 8.30867 19.7886 8.47L18.9746 10.164C18.8426 10.428 18.7766 10.7067 18.7766 11C18.7766 11.2933 18.8426 11.572 18.9746 11.836L19.7886 13.53C19.8619 13.6913 19.8729 13.8563 19.8216 14.025C19.7703 14.1937 19.6639 14.3147 19.5026 14.388ZM15.2126 6.358C15.0953 6.24067 14.9449 6.182 14.7616 6.182C14.5783 6.182 14.4279 6.24067 14.3106 6.358L5.92859 14.74C5.81126 14.8573 5.75259 15.004 5.75259 15.18C5.75259 15.356 5.81493 15.5063 5.93959 15.631C6.06426 15.7557 6.20726 15.818 6.36859 15.818C6.52993 15.818 6.68393 15.7593 6.83059 15.642L15.2126 7.26C15.3299 7.14267 15.3886 6.996 15.3886 6.82C15.3886 6.644 15.3299 6.49 15.2126 6.358ZM8.04059 5.28C7.61526 5.28 7.22293 5.38633 6.86359 5.599C6.50426 5.81167 6.22193 6.094 6.01659 6.446C5.81126 6.798 5.70859 7.18667 5.70859 7.612C5.70859 8.03733 5.81126 8.426 6.01659 8.778C6.22193 9.13 6.50426 9.41233 6.86359 9.625C7.22293 9.83767 7.61526 9.944 8.04059 9.944C8.46593 9.944 8.85459 9.83767 9.20659 9.625C9.55859 9.41233 9.83726 9.13 10.0426 8.778C10.2479 8.426 10.3506 8.03733 10.3506 7.612C10.3506 7.18667 10.2479 6.798 10.0426 6.446C9.83726 6.094 9.55493 5.81167 9.19559 5.599C8.83626 5.38633 8.45126 5.28 8.04059 5.28ZM8.04059 8.668C7.74726 8.668 7.49793 8.56533 7.29259 8.36C7.08726 8.15467 6.98459 7.90533 6.98459 7.612C6.98459 7.31867 7.08726 7.06933 7.29259 6.864C7.49793 6.65867 7.74726 6.556 8.04059 6.556C8.33393 6.556 8.58326 6.65867 8.78859 6.864C8.99393 7.06933 9.09659 7.31867 9.09659 7.612C9.09659 7.90533 8.99393 8.15467 8.78859 8.36C8.58326 8.56533 8.33393 8.668 8.04059 8.668ZM13.1006 12.056C12.6753 12.056 12.2866 12.1587 11.9346 12.364C11.5826 12.5693 11.3039 12.8517 11.0986 13.211C10.8933 13.5703 10.7906 13.9627 10.7906 14.388C10.7906 15.0333 11.0143 15.5797 11.4616 16.027C11.9089 16.4743 12.4553 16.698 13.1006 16.698C13.5259 16.698 13.9183 16.5953 14.2776 16.39C14.6369 16.1847 14.9193 15.906 15.1246 15.554C15.3299 15.202 15.4326 14.8133 15.4326 14.388C15.4326 13.9627 15.3299 13.574 15.1246 13.222C14.9193 12.87 14.6369 12.5877 14.2776 12.375C13.9183 12.1623 13.5259 12.056 13.1006 12.056ZM13.1006 15.444C12.8219 15.444 12.5763 15.3377 12.3636 15.125C12.1509 14.9123 12.0446 14.663 12.0446 14.377C12.0446 14.091 12.1509 13.8453 12.3636 13.64C12.5763 13.4347 12.8256 13.332 13.1116 13.332C13.3976 13.332 13.6433 13.4347 13.8486 13.64C14.0539 13.8453 14.1566 14.0947 14.1566 14.388C14.1566 14.6813 14.0539 14.9307 13.8486 15.136C13.6433 15.3413 13.3939 15.444 13.1006 15.444Z" fill="#202435" />
                    </svg>
                    <h1 className='font-inter font-medium text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#202435]'>Daily Mega Discounts</h1>
                </div>

                <div className='bg-[#E4E5EE] w-10 md:w-[0.5px] h-[0.5px] md:h-10'></div>

                <div className='flex items-center gap-3 w-full md:w-auto justify-center md:justify-start'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0C9.00533 0 7.15733 0.498667 5.456 1.496C3.79867 2.47867 2.47867 3.79867 1.496 5.456C0.498667 7.15733 0 9.00533 0 11C0 12.9947 0.498667 14.8427 1.496 16.544C2.47867 18.2013 3.79867 19.5213 5.456 20.504C7.15733 21.5013 9.00533 22 11 22C12.9947 22 14.8427 21.5013 16.544 20.504C18.2013 19.5213 19.5213 18.2013 20.504 16.544C21.5013 14.8427 22 12.9947 22 11C22 9.00533 21.5013 7.15733 20.504 5.456C19.5213 3.79867 18.2013 2.47867 16.544 1.496C14.8427 0.498667 12.9947 0 11 0ZM11 20.636C9.26933 20.636 7.656 20.196 6.16 19.316C4.708 18.4653 3.55667 17.314 2.706 15.862C1.826 14.366 1.386 12.7453 1.386 11C1.386 9.25467 1.826 7.634 2.706 6.138C3.55667 4.686 4.708 3.53467 6.16 2.684C7.656 1.804 9.273 1.364 11.011 1.364C12.749 1.364 14.366 1.804 15.862 2.684C17.314 3.53467 18.4653 4.686 19.316 6.138C20.196 7.634 20.636 9.25467 20.636 11C20.636 12.7453 20.196 14.366 19.316 15.862C18.4653 17.314 17.314 18.4653 15.862 19.316C14.366 20.196 12.7453 20.636 11 20.636ZM11 10.318C10.4427 10.318 9.95867 10.1823 9.548 9.911C9.13733 9.63967 8.932 9.317 8.932 8.943C8.932 8.569 9.13733 8.24633 9.548 7.975C9.95867 7.70367 10.4427 7.568 11 7.568C11.6453 7.568 12.1807 7.744 12.606 8.096C12.7527 8.228 12.9213 8.29033 13.112 8.283C13.3027 8.27567 13.4603 8.19867 13.585 8.052C13.7097 7.90533 13.7647 7.73667 13.75 7.546C13.7353 7.35533 13.662 7.20133 13.53 7.084C13.046 6.644 12.43 6.36533 11.682 6.248V5.5C11.682 5.30933 11.616 5.148 11.484 5.016C11.352 4.884 11.1907 4.818 11 4.818C10.8093 4.818 10.648 4.884 10.516 5.016C10.384 5.148 10.318 5.30933 10.318 5.5V6.248C9.526 6.36533 8.86967 6.677 8.349 7.183C7.82833 7.689 7.568 8.272 7.568 8.932C7.568 9.43067 7.722 9.889 8.03 10.307C8.338 10.725 8.756 11.0587 9.284 11.308C9.812 11.5573 10.384 11.682 11 11.682C11.5573 11.682 12.0413 11.8177 12.452 12.089C12.8627 12.3603 13.068 12.683 13.068 13.057C13.068 13.431 12.8627 13.7537 12.452 14.025C12.0413 14.2963 11.5573 14.432 11 14.432C10.3547 14.432 9.81933 14.256 9.394 13.904C9.24733 13.772 9.07867 13.7097 8.888 13.717C8.69733 13.7243 8.53967 13.8013 8.415 13.948C8.29033 14.0947 8.23533 14.2633 8.25 14.454C8.26467 14.6447 8.34533 14.7987 8.492 14.916C8.94667 15.356 9.55533 15.6347 10.318 15.752V16.5C10.318 16.6907 10.384 16.852 10.516 16.984C10.648 17.116 10.8093 17.182 11 17.182C11.1907 17.182 11.352 17.116 11.484 16.984C11.616 16.852 11.682 16.6907 11.682 16.5V15.752C12.474 15.6347 13.1303 15.323 13.651 14.817C14.1717 14.311 14.432 13.728 14.432 13.068C14.432 12.5693 14.278 12.111 13.97 11.693C13.662 11.275 13.244 10.9413 12.716 10.692C12.188 10.4427 11.616 10.318 11 10.318Z" fill="#202435" />
                    </svg>
                    <h1 className='font-inter font-medium text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#202435]'>Best price on the market</h1>
                </div>
            </section>

            <div className='bg-[#E4E5EE] w-full max-w-300 mt-5 h-[0.8px]'></div>
        </section>
        {/* section 2 */}
        <section className='w-full max-w-[1521px] min-h-[508.5px] rotate-0 opacity-100 bg-[#F7F8FD] mx-auto px-4 lg:px-0'>
            {/* main section */}
            <main className='flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-30 py-8 md:pt-25' >
                <section className='w-full md:w-auto text-center md:text-left'>
                    <h1 className='font-dosis font-semibold text-[15px] leading-[18px] tracking-[0] align-middle uppercase text-[#202435]'>Fruit & Vegetables</h1>
                    <div className='mt-5 flex flex-col gap-3'>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Fresh Vegetables</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Herbs & Seasonings</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Fresh Fruits</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Cuts & Sprouts</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Exotic Fruits & Veggies</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Packaged Produce</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Party Trays</h2>
                    </div>
                </section>

                <section className='w-full md:w-auto text-center md:text-left'>
                    <h1 className='font-dosis font-semibold text-[15px] leading-[18px] tracking-[0] align-middle uppercase text-[#202435]'>Breakfast & Dairy</h1>
                    <div className='mt-5 flex flex-col gap-3'>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Milk & Flavoured Milk</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Butter and Margarine</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Cheese</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Eggs Substitutes</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Honey</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Marmalades</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Sour Cream and Dips</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Yogurt</h2>
                    </div>
                </section>

                <section className='w-full md:w-auto text-center md:text-left'>
                    <h1 className='font-dosis font-semibold text-[15px] leading-[18px] tracking-[0] align-middle uppercase text-[#202435]'>Meat & Seafood</h1>
                    <div className='mt-5 flex flex-col gap-3'>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Breakfast Sausage</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Dinner Sausage</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Beef</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Chicken</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Sliced Deli Meat</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Shrimp</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Wild Caught Fillets</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Crab and Shellfish</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Farm Raised Fillets</h2>
                    </div>
                </section>

                <section className='w-full md:w-auto text-center md:text-left'>
                    <h1 className='font-dosis font-semibold text-[15px] leading-[18px] tracking-[0] align-middle uppercase text-[#202435]'>Beverages</h1>
                    <div className='mt-5 flex flex-col gap-3'>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Water</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Sparkling Water</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Soda & Pop</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Coffee</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Milk & Plant-Based Milk</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Tea & Kombucha</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Drink Boxes & Pouches</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Craft Beer</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Wine</h2>
                    </div>
                </section>

                <section className='w-full md:w-auto text-center md:text-left'>
                    <h1 className='font-dosis font-semibold text-[15px] leading-[18px] tracking-[0] align-middle uppercase text-[#202435]'>Breads & Bakery</h1>
                    <div className='mt-5 flex flex-col gap-3'>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Milk & Flavoured Milk</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Butter and Margarine</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Cheese</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Eggs Substitutes</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Honey</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Marmalades</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Sour Cream and Dips</h2>
                        <h2 className='font-inter font-normal text-[13px] leading-[19.5px] tracking-[-0.1px] align-middle text-[#71778E]'>Yogurt</h2>
                    </div>
                </section>
            </main>
        </section>
        {/* contact info section */}
        <section className='min-h-[203px] w-full max-w-[1521px] mx-auto px-4 lg:px-0'>
            <section className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-0 lg:mx-40 mt-10 mb-5'>
                {/* left side */}
                <div className='flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-start'>
                    <div className='w-[42px] h-[42px] rotate-0 opacity-100 rounded-[21px] border border-[#E4E5EE] flex items-center justify-center'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2055 11.142C13.8455 10.758 13.4225 10.566 12.9365 10.566C12.4505 10.566 12.0155 10.758 11.6315 11.142L10.4255 12.348L10.0295 12.132C9.89751 12.072 9.80751 12.024 9.75951 11.988C8.63151 11.256 7.58751 10.308 6.62751 9.144C6.15951 8.532 5.81751 7.992 5.60151 7.524C5.88951 7.272 6.18351 6.984 6.48351 6.66L6.80751 6.336C7.20351 5.928 7.40151 5.487 7.40151 5.013C7.40151 4.539 7.20351 4.104 6.80751 3.708L5.76351 2.664C5.60751 2.508 5.49351 2.388 5.42151 2.304L5.24151 2.124C5.01351 1.884 4.83351 1.71 4.70151 1.602C4.32951 1.23 3.90951 1.044 3.44151 1.044C2.97351 1.044 2.54151 1.23 2.14551 1.602H2.12751L0.831512 2.916C0.351512 3.396 0.0815122 3.984 0.0215122 4.68C-0.0624878 5.484 0.0995122 6.42 0.507512 7.488C0.807512 8.316 1.19451 9.126 1.66851 9.918C2.14251 10.71 2.72151 11.52 3.40551 12.348C5.08551 14.34 7.07151 15.894 9.36351 17.01C10.5995 17.598 11.7155 17.928 12.7115 18H12.9455C13.8335 18 14.5655 17.688 15.1415 17.064V17.046C15.2495 16.914 15.4235 16.728 15.6635 16.488L15.8075 16.344C15.9635 16.212 16.1315 16.05 16.3115 15.858C16.6955 15.45 16.8875 15.006 16.8875 14.526C16.8875 14.046 16.6895 13.62 16.2935 13.248L14.2055 11.142ZM15.5735 15.156C15.5135 15.228 15.4115 15.33 15.2675 15.462L15.1055 15.624C14.8295 15.876 14.5835 16.128 14.3675 16.38C14.0075 16.776 13.5335 16.974 12.9455 16.974H12.7655C11.8895 16.914 10.9055 16.62 9.81351 16.092C7.64151 15.036 5.76951 13.572 4.19751 11.7C3.54951 10.92 3.00351 10.161 2.55951 9.423C2.11551 8.685 1.74951 7.926 1.46151 7.146C1.28151 6.654 1.15851 6.219 1.09251 5.841C1.02651 5.463 1.01151 5.1 1.04751 4.752C1.08351 4.296 1.25751 3.924 1.56951 3.636L2.86551 2.34C3.04551 2.16 3.23451 2.07 3.43251 2.07C3.63051 2.07 3.81951 2.16 3.99951 2.34C4.10751 2.436 4.25751 2.586 4.44951 2.79L4.80951 3.15C4.91751 3.246 4.99551 3.324 5.04351 3.384L6.08751 4.428C6.48351 4.812 6.48351 5.202 6.08751 5.598C6.01551 5.682 5.90751 5.796 5.76351 5.94C5.34351 6.36 5.02551 6.666 4.80951 6.858L4.79151 6.876C4.55151 7.116 4.48551 7.404 4.59351 7.74V7.776C4.85751 8.4 5.27151 9.066 5.83551 9.774C6.87951 11.07 8.00151 12.096 9.20151 12.852L9.77751 13.158C9.90951 13.218 9.99951 13.266 10.0475 13.302L10.1015 13.338C10.2455 13.398 10.3655 13.428 10.4615 13.428C10.6775 13.428 10.8755 13.338 11.0555 13.158L12.3515 11.862C12.5435 11.67 12.7295 11.574 12.9095 11.574C13.0895 11.574 13.2755 11.67 13.4675 11.862L15.5735 13.968C15.9575 14.34 15.9575 14.736 15.5735 15.156ZM9.70551 4.284C10.7255 4.452 11.5985 4.899 12.3245 5.625C13.0505 6.351 13.5095 7.23 13.7015 8.262C13.7135 8.382 13.7675 8.484 13.8635 8.568C13.9595 8.652 14.0735 8.694 14.2055 8.694L14.2955 8.676C14.4275 8.652 14.5355 8.583 14.6195 8.469C14.7035 8.355 14.7335 8.226 14.7095 8.082C14.6135 7.482 14.4245 6.912 14.1425 6.372C13.8605 5.832 13.5035 5.346 13.0715 4.914C12.6395 4.482 12.1505 4.125 11.6045 3.843C11.0585 3.561 10.4855 3.372 9.88551 3.276C9.75351 3.252 9.62751 3.279 9.50751 3.357C9.38751 3.435 9.31551 3.546 9.29151 3.69C9.26751 3.834 9.29451 3.963 9.37251 4.077C9.45051 4.191 9.56151 4.26 9.70551 4.284ZM17.9675 7.938C17.7995 6.942 17.4845 6.003 17.0225 5.121C16.5605 4.239 15.9695 3.438 15.2495 2.718C14.5295 1.998 13.7285 1.407 12.8465 0.945002C11.9645 0.483002 11.0255 0.168001 10.0295 0C9.89751 -0.0240002 9.77151 0.00600052 9.65151 0.0900002C9.53151 0.174002 9.45951 0.285 9.43551 0.423C9.41151 0.561001 9.44151 0.690001 9.52551 0.810001C9.60951 0.93 9.72351 1.002 9.86751 1.026C10.7435 1.17 11.5805 1.449 12.3785 1.863C13.1765 2.277 13.8965 2.802 14.5385 3.438C15.1805 4.074 15.7055 4.788 16.1135 5.58C16.5215 6.372 16.8035 7.212 16.9595 8.1C16.9715 8.22 17.0255 8.322 17.1215 8.406C17.2175 8.49 17.3315 8.532 17.4635 8.532H17.5535C17.6855 8.508 17.7935 8.436 17.8775 8.316C17.9615 8.196 17.9915 8.07 17.9675 7.938Z" fill="#202435" />
                        </svg>
                    </div>
                    <div className='text-center lg:text-left'>
                        <h1 className='font-inter font-semibold text-[20px] leading-6 tracking-[0] align-middle text-[#202435]'>8 800 555-55</h1>
                        <p className='font-inter font-normal text-[11px] leading-[16.5px] tracking-[-0.1px] align-middle text-[#202435] opacity-50 mt-1'>Working 8:00 - 22:00</p>
                    </div>
                </div>
                {/* right side */}
                <div className='flex flex-col md:flex-row items-center gap-4 md:gap-5 w-full lg:w-auto justify-center lg:justify-end'>
                    <div className='text-center md:text-right'>
                        <h1 className='font-inter font-semibold text-[14px] leading-[16.8px] tracking-[0] align-middle text-[#202435]'>Download App on Mobile :</h1>
                        <p className='font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] align-middle text-[#202435] opacity-50'>15% discount on your first purchase</p>
                    </div>

                    <div className='flex items-center gap-1 justify-center'>
                        <img src={footergoogle} alt="google play" className='max-w-[120px] md:max-w-none' />
                        <img src={footerapp} alt="app store" className='max-w-[120px] md:max-w-none' />
                    </div>

                    <div className='flex items-center gap-1 justify-center'>
                        <div className="w-[34px] h-[34px] rotate-0 opacity-100 rounded-[17px] border border-[#E4E5EE] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#35AFA0] hover:border-[#35AFA0]">
                            <i className="fa-brands fa-facebook-f text-sm text-[#233A95] transition-colors duration-300 hover:text-white"></i>
                        </div>
                        <div className="w-[34px] h-[34px] rotate-0 opacity-100 rounded-[17px] border border-[#E4E5EE] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#35AFA0] hover:border-[#35AFA0]">
                            <i className="fa-brands fa-twitter text-sm text-[#233A95] transition-colors duration-300 hover:text-white"></i>
                        </div>
                        <div className="w-[34px] h-[34px] rotate-0 opacity-100 rounded-[17px] border border-[#E4E5EE] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#35AFA0] hover:border-[#35AFA0]">
                            <i className="fa-brands fa-instagram text-sm text-[#233A95] transition-colors duration-300 hover:text-white"></i>
                        </div>
                    </div>
                </div>
            </section>
            <div className='flex items-center justify-center'>
                <div className='bg-[#E4E5EE] w-full max-w-315 mt-8 h-[0.8px] '></div>
            </div>

            <section className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 lg:mx-40 mt-10'>
                <p className='font-inter font-normal text-[12px] leading-[18px] opacity-70 tracking-[-0.1px] align-middle text-[#9B9BB4] text-center md:text-left'>Copyright 2025 © All rights reserved by WebMasters</p>
                <div className='flex flex-col md:flex-row items-center gap-3'>
                    <div className='flex items-center gap-3 justify-center'>
                        <p className='font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] align-middle opacity-70 text-[#9B9BB4]'>Privacy Policy</p>
                        <p className='font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] align-middle opacity-70 text-[#9B9BB4]'>Terms and Conditions</p>
                        <p className='font-inter font-normal text-[12px] leading-[18px] tracking-[-0.1px] align-middle opacity-70 text-[#9B9BB4]'>Cookie</p>
                    </div>
                    <img src={footerpayment} alt="payment methods" className='max-w-[200px] md:max-w-none' />
                </div>
            </section>
        </section>
    </>
}