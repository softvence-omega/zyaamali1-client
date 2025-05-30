import SectionBlock from "@/components/Reuseable/SectionBlock"
import img from "../assets/image (1).png"

 const longDescription = `
    Lorem ipsum dolor sit amet consectetur. In fringilla fames facilisis vulputate gravida blandit leo habitant.
    Ullamcorper justo adipiscing amet consequat ut metus aliquam eget sed. Nulla nunc velit lacinia ultricies.
    Aenean amet venenatis cursus egestas non odio. Tellus morbi tempus eu pharetra libero felis euismod vitae.
    Venenatis id sagittis in in vulputate. Nisi cras aenean neque lacus odio. Sed hendrerit tristique nullam sit
    amet pharetra cursus dictum. Neque nec iaculis sit elementum leo.
  `;

function Services3() {
  return (
    <div>
      <SectionBlock
      img={img}
      title="About This Service"
      description={longDescription}
      />
        
      


      {/* <div className=" md:max-w-6xl mx-auto my-5">
        <div className="my-5">
          <img src={img} alt="" />
        </div>
        <div>
       <h1 className="text-[48px] font-nunito Sans font-semibold ">About This Service</h1>
       <p>Lorem ipsum dolor sit amet consectetur. In fringilla fames facilisis vulputate gravida blandit leo habitant. Ullamcorper justo adipiscing amet consequat ut metus aliquam eget sed. Nulla nunc velit lacinia ultricies. Aenean amet venenatis cursus egestas non odio. Tellus morbi tempus eu pharetra libero felis euismod vitae. Venenatis id sagittis in in vulputate. Nisi cras aenean neque lacus odio. Sed hendrerit tristique nullam sit amet pharetra cursus dictum. Neque nec iaculis sit elementum leo. Lorem ipsum dolor sit amet consectetur. In fringilla fames facilisis vulputate gravida blandit leo habitant. Ullamcorper justo adipiscing amet consequat ut metus aliquam eget sed. Nulla nunc velit lacinia ultricies. Aenean amet venenatis cursus egestas non odio. Tellus morbi tempus eu pharetra libero felis euismod vitae. Venenatis id sagittis in in vulputate. Nisi cras aenean neque lacus odio. Sed hendrerit tristique nullam sit amet pharetra cursus dictum. Neque nec iaculis sit elementum leo.</p>

        </div>
      </div>
       */}
    </div>
  )
}

export default Services3
