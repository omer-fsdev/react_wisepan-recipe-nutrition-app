import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import veget from "../../assets/images/vegetables.png";

const About = () => {
  return (
    <div>
      <AboutContainer>
        
        <HeaderContainer>
          <h1>
            About <span>Wise-Pan</span>
          </h1>
        </HeaderContainer>
        <StyledImage src={veget} />
        <InfoContainer>
          <h1>Food, Nutrition, and More</h1>

          <h2>
            Welcome to <span>Wise-Pan</span>, your destination for tasty
            recipes, nutrition facts, and helpful articles on healthy eating.
          </h2>
          <h1>What We Offer</h1>
          <h3>
            {" "}
            Explore a variety of delicious recipes for all cooking levels. Find
            out the nutritional content of our recipes. Learn more about healthy
            eating from the informative articles.{" "}
          </h3>
          <h1>Join Us</h1>
          <h3>
            Join our community of food lovers and discover the joy of cooking
            while staying healthy.
          </h3>
          <h1>Our Goal</h1>
          <h3>
            At <span>Wise-Pan</span>, we aim to make cooking and eating better
            for you. Let's savor great flavors while staying mindful of
            nutrition.
          </h3>
          <h1>
            Thank you for choosing <span>Wise-Pan</span> as your food and
            nutrition resource. Let's make every meal a delight!
          </h1>
          {/* whatsapp://tel:3216541234 */}
        </InfoContainer>
      </AboutContainer>
    </div>
  );
};

export default About;
