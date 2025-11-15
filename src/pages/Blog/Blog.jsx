import axios from "axios"
import banner from "../../assets/Widget-Banner.png"
import { useEffect, useState } from "react"

export default function Blog() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2; // عدد المقالات في الصفحة

    const totalPages = Math.ceil(items.length / itemsPerPage);

    // المقالات اللي هتظهر في الصفحة الحالية
    const currentItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    async function getAllBlogs() {
        try {
            const token = localStorage.getItem("userToken");
            const domain = 'https://e-commarce-website-eight.vercel.app';
            const { data } = await axios.get(
                `${domain}/api/v1/blog/get-all-blog`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setItems(data.data);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        }
    }


    useEffect(() => {
        getAllBlogs()

    }, [])
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [currentPage, totalPages]);


    return (
        <section className="pb-28">
            <div className="container lg:max-w-[1200px] m-auto px-8">

                <div className="flex justify-between flex-col lg:flex-row lg:m-auto">
                    {/*  articals section */}
                    <div className="articals lg:w-[70%]">
                        {currentItems.map((artical, index) => (
                            <div className='mb-14' key={index}>
                                <img src={artical.Image.url} alt="" className='xl:w-[855px] xl:h-[598.5px] w-full h-auto   rounded-md object-cover' />
                                <div className="category mt-5">{artical.Tags}</div>
                                <h2 className='font-semibold text-[36px] leading-9 my-4'>{artical.title}</h2>
                                <div className="info  mb-6 "><span className='text-[#71778E] mr-4'>{new Date(artical.createdAt)
                                    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                                    .replace(",", "")}</span>{artical.author}</div>
                                <p className='text-[#202435]'>
                                    {artical.content}
                                </p>
                            </div>

                        )
                        )}


                        <div className="pag flex gap-2 justify-center items-center mt-4">
                            {Array.from({ length: totalPages }, (_, i) => (

                                <div key={i + 1} onClick={() => setCurrentPage(i + 1)}
                                    className={`page flex justify-center items-center ${currentPage === i + 1 ? 'bg-[#35AFA0] text-white' : ''}  rounded-full w-9 h-9 cursor-pointer`}>{i + 1}</div>

                            ))}
                            {/* <div className="page flex justify-center items-center text-black w-9 h-9">2</div> */}
                            <i className="fa-solid fa-angle-right cursor-pointer" onClick={() => setCurrentPage(currentPage + 1)}></i>
                        </div>
                    </div>
                    {/* aside section */}
                    <aside className='lg:w-[23%]'>
                        <div className="posts-parent max-lg:mt-5">
                            <h3 className="uppercase mb-4 ">recent posts</h3>
                            <div className="Recent-Posts rounded-lg border border-[#EDEEF5]  p-4">
                                {items.slice(0, 3).map((post, index) => (
                                    <div key={index} className="Post flex  items-center mb-10 last-of-type:mb-0">
                                        <div className="image h-[60px] w-[60px] shrink-0  relative ">
                                            <img src={post.Image.url} alt="" className='h-full w-full rounded-full  object-cover' />
                                            <div className="num absolute w-2.5 h-2.5 flex justify-center items-center bg-[#35AFA0] rounded-full p-2 top-0 right-0 border-white border text-white">{index + 1}</div>
                                        </div>
                                        <h3 className='ml-2.5 text-sm font-medium'>{post.title}</h3>
                                    </div>
                                ))}




                            </div>
                        </div>
                        <div className="social-parent my-14 ">
                            <h3 className='uppercase mb-4 '>social media</h3>
                            <div className="social  mb-0.5 h-[42px] bg-[#3B5998] text-white rounded-sm pl-8 flex items-center  uppercase ">
                                <i class="fa-brands fa-facebook-f mr-6 text-[15px]"></i>facebook
                            </div>
                            <div className="social  mb-0.5 h-[42px] bg-[#CC2366] text-white rounded-sm pl-8 flex items-center  uppercase "><i class="fa-brands fa-instagram mr-6 text-[15px]"></i>Instagram</div>
                            <div className="social  mb-0.5 h-[42px] bg-[#1DA1F2] text-white rounded-sm pl-8 flex items-center  uppercase"><i class="fa-brands fa-twitter mr-6 text-[15px]"></i>twitter</div>
                            <div className="social  mb-0.5 h-[42px] bg-[#FF4500] text-white rounded-sm pl-8 flex items-center  uppercase"><i class="fa-brands fa-reddit mr-6 text-[15px]"></i>reddit</div>
                            <div className="social  mb-0.5 h-[42px] bg-[#E60023] text-white rounded-sm pl-8 flex items-center  uppercase"><i class="fa-brands fa-pinterest-p mr-6 text-[15px]"></i>Pinterest</div>

                        </div>

                        <div className="banner-parent">

                            <h3 className="uppercase mb-4 ">Widget Banner</h3>
                            <img src={banner} className=' h-[368px] ' alt="" />

                        </div>
                        <div className="tags-parent mt-14">
                            <h3 className="uppercase mb-4">tags</h3>
                            <div className="tags flex shrink-0 flex-wrap gap-1">
                                <div className="tag border border-[#EDEEF5] px-[11px] py-1.5">
                                    ecommerce
                                </div>
                                <div className="tag border border-[#EDEEF5] px-[11px] py-1.5">
                                    food
                                </div>
                                <div className="tag border border-[#EDEEF5] px-[11px] py-1.5">
                                    grocery
                                </div>
                                <br />
                                <div className="tag border border-[#EDEEF5] px-[11px] py-1.5">
                                    klbtheme
                                </div>
                                <div className="tag border border-[#EDEEF5] px-[11px] py-1.5">
                                    organic
                                </div>
                                <div className="tag border border-[#EDEEF5] px-[11px] py-1.5">
                                    shop
                                </div>
                                <br />
                                <div className="tag border border-[#EDEEF5] px-[11px] py-1.5">
                                    shopify
                                </div>
                                <div className="tag border border-[#EDEEF5] px-[11px] py-1.5">
                                    store
                                </div>

                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </section >
    )
}
