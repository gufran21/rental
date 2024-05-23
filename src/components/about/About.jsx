import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import Markdown from "react-markdown"
const About = () => {
  const about_content=`
  ## About Us
Welcome to **Rental**, your trusted partner in finding the perfect property. With years of experience and a deep understanding of the real estate market, we are committed to providing exceptional service and expertise to help you achieve your real estate goals.

### Our Mission
Our mission is to simplify the real estate process for our clients, offering personalized guidance and support every step of the way. Whether you are buying, selling, renting, or investing, we strive to make your experience as seamless and stress-free as possible.

### Who We Are
At **Rental**, we are a team of dedicated professionals passionate about real estate. Our agents are knowledgeable, friendly, and always ready to go the extra mile to meet your needs. We pride ourselves on our integrity, transparency, and commitment to excellence.

### What We Do
We offer a comprehensive range of real estate services, including:

- **Residential Sales and Leasing:** Helping you find your dream home or the perfect rental.
- **Commercial Real Estate:** Assisting businesses in locating ideal commercial spaces.
- **Property Management:** Providing reliable management services to maximize the value of your investment.
- **Real Estate Investment:** Offering expert advice and opportunities for investing in the real estate market.


### Why Choose Us?
- **Experience:** With 10 years in the industry, we have a proven track record of success.
- **Local Expertise:** Our deep understanding of the local market allows us to provide valuable insights and guidance.
- **Personalized Service:** We tailor our services to meet your unique needs and preferences.
- **Cutting-Edge Technology:** Utilizing the latest technology to enhance your real estate experience.
- **Client Satisfaction:** Our commitment to client satisfaction is reflected in our numerous positive testimonials and repeat business.

### Our Values
- **Integrity:** We conduct our business with the highest ethical standards.
- **Excellence:** We strive for excellence in everything we do.
- **Innovation:** We embrace innovative solutions to stay ahead in the market.
- **Community:** We are committed to giving back and making a positive impact in our community.

### Meet Our Team
Our team of experienced professionals is the backbone of our success. Get to know our agents and staff who are ready to assist you in your real estate journey.

### Contact Us
Ready to take the next step? Contact us today to learn more about how we can help you achieve your real estate goals. We look forward to working with you!

**Rental** is here to make your real estate dreams a reality. Let us guide you home.
  `
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <Markdown>{about_content}</Markdown>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
