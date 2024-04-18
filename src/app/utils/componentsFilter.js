
import Principes from '@/components/shared-components/principes/Principes';
import Subtleties from "@/components/shared-components/subtleties/Subtleties";
import QuoteSection from "@/components/shared-components/quote/QuoteSection";
import UpArrow from "@/components/shared-components/up-arrow/UpArrow";
import Philosophy from "@/components/shared-components/philosophy/Philosophy";
import AboutUs from "@/[locale]/(views)/about/AboutUs";
import ServiceStepsContainer from '@/components/shared-components/service-steps/ServiceStepsContainer';
import Offer from "@/components/shared-components/unique-offer/Offer";
import MaterialEquipmentProcurement from "@/components/shared-components/material-equipment-rocurement/MaterialEquipmentProcurement";

export function getChildComponent(name) {
    switch (name) {
      case "quote":
        return QuoteSection;
      case "philosophy":
        return Philosophy;
      case "principes":
        return Principes;
      case "subtelties":
        return Subtleties;
      case "about":
        return AboutUs;
      case "service-plan":
        return ServiceStepsContainer;
      case "equipment":
        return MaterialEquipmentProcurement;
      case "offer":
        return Offer;
      default:
        return null;
    }
  }
  
  export function getAnimationProps(name,order) {
    switch (name) {
      case "principes":
        return { animate: true, negativeY: false };
      case "subtelties":
        return { animate: true };
      case "quote":
        return { animate: false, negativeY: false, UpArrowComponent: order ? null : UpArrow };
      default:
        return { animate: true, negativeY: true };
    }
  }