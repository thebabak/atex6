import Image from "next/image";
import { Inter } from "next/font/google";
import HomePageBanner from "@/components/HomePageBanner/HomePageBanner";
import HomeCategories from "@/components/HomeCategories/HomeCategories";
import StepToPlaceOrder from "@/components/StepToPlaceOrder/StepToPlaceOrder";
import HomeBelive from "@/components/HomeBelive/HomeBelive";
import HomeCompanyOptions from "@/components/HomeCompanyOptions/HomeCompanyOptions";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import AskedQuestions from "@/components/AskedQuestions/AskedQuestions";
import CustomerSays from "@/components/CustomerSays/CustomerSays";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
    <HomePageBanner/>
   <HomeCategories />
   <StepToPlaceOrder/>
   <HomeBelive/>
   <HomeCompanyOptions/>
   <WhyChooseUs/>
   <AskedQuestions/>
   <CustomerSays/>
    </main>
  );
}
