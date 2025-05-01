import UolFooter from "./FirstBlock";
import LastContent from "./lastcontent";
import UolSubscriptionBar from "./secondContant";

export default function Footer() {
  return(
    <div className="w-[100%] flex flex-col items-center">
      <UolFooter />
      <UolSubscriptionBar/>
      <LastContent/>
    </div>
  ) ;
}