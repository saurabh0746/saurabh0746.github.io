import React from "react";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";

const services = [
  {
    icon: <FormatPaintIcon style={{ fontSize: "50px", color: "#808080" }} />,
    title: "Web/Mobile Design (UI)",
    description:
      "We specialize in cutting-edge web and mobile UI design, crafting intuitive, visually stunning interfaces. Our team creates engaging, accessible digital experiences by blending the latest design trends with user behavior insights. Our responsive, user-friendly designs ensure optimal performance, transforming your digital presence and captivating your audience.",
  },
  {
    icon: <BusinessCenterIcon style={{ fontSize: "50px", color: "#808080" }} />,
    title: "Branding",
    description:
      "We specialize in data engineering, delivering robust solutions for data collection, storage, and analysis. Our team ensures seamless data integration and management, leveraging advanced technologies to optimize data workflows. We transform raw data into actionable insights, empowering your business to make informed decisions and drive growth. Partner with us for exceptional data engineering services.",
  },
  {
    icon: <ContentPasteSearchIcon style={{ fontSize: "50px", color: "#808080" }} />,
    title: "Data Engineering",
    description:
      "We specialize in data engineering, delivering robust solutions for data collection, storage, and analysis. My team ensures seamless data integration and management, leveraging advanced technologies to optimize data workflows. We transform raw data into actionable insights, empowering your business to make informed decisions and drive growth. Partner with us for exceptional data engineering services.",
  },
  {
    icon: <ContentPasteSearchIcon style={{ fontSize: "50px", color: "#808080" }} />,
    title: "Web Development",
    description:
      "We specialize in web development, delivering robust, user-friendly websites tailored to meet your business goals. Our team combines cutting-edge technologies with responsive design principles to create seamless digital experiences. From custom web applications to e-commerce platforms, we ensure your online presence is engaging, scalable, and optimized for success. Partner with us to elevate your web presence and achieve your digital objectives.",
  },
  {
    icon: <ContentPasteSearchIcon style={{ fontSize: "50px", color: "#808080" }} />,
    title: "Mobile App Developent",
    description:
      "We are specialize in mobile app development, crafting intuitive, feature-rich applications that enhance user experiences. My team utilizes the latest technologies to build robust, scalable solutions across iOS and Android platforms. From concept to deployment, we ensure your app is user-friendly, visually appealing, and optimized for performance. Partner with us to bring your mobile app ideas to life and engage your audience effectively.",
  },
  {
    icon: <ContentPasteSearchIcon style={{ fontSize: "50px", color: "#808080" }} />,
    title: "Support",
    description:
      "We are specialize in providing comprehensive software support services, ensuring smooth operation and maintenance of your applications. My team offers timely updates, bug fixes, and technical assistance to keep your software running efficiently. We prioritize quick response times and effective solutions to minimize downtime and optimize performance. Partner with us for reliable software support that enhances your business operations.",
  },
];

const Service = () => {
  return (
    <div className="bg-[#808080] py-[50px]">
      {/* Heading Section */}
      <div className="text-center mb-[40px]">
        <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-normal text-[#fff]">
          My Services
        </h1>
      </div>

      {/* Services Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-[80px]">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
              {service.icon}
            </div>
            <div className="mt-[15px] text-center text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[1.1] text-[#fff]">
              {service.title}
              <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[25px] mt-[15px] text-[start]" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
