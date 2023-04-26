import MetricsApiConnector from "@obi-dbs/metrics-api-connector";
import log from "loglevel";

interface PromotionData {
  promotionId: string;
  promotionName?: string;
  promotionPlacement?: string;
  promotionContent?: string;
  promotionVariant?: string;
  promotionRule?: string;
  promotionPositionHorizontal?: string;
  promotionPositionVertical?: string;
}

/**
 * Provides general Tracking for events
 * @param {String} interactionId ID of the interaction
 * @param {String} interactionValue Value of the interaction
 * @param {Object<PromotionData>} promotionData Data by promotion
 */
function trackPromotionInteraction(
  interactionId: String,
  interactionValue: String,
  promotionData: PromotionData,
): boolean {
  MetricsApiConnector.trackEvent("clickPromotion", {
    interaction: {
      interactionId: interactionId ? interactionId.toString() : "",
      interactionValueUnique: interactionValue ? interactionValue.toString() : "",
    },
    promotion: promotionData,
  }).catch((e) => {
    log.warn(`[Tracking Interaction] ${interactionId} failed.`, e);
    return false;
  });
  return true;
}

/**
 * Extracts value with key from Trackingdata
 * @param {Object} trackingData available trackingData
 * @param {String} trackingParameter cCP-Parameter
 */
function getParameterFromTrackingData(trackingData, trackingParameter: String) {
  let result = "";

  if (trackingData && trackingData.parameters) {
    result = trackingData?.parameters.find((p) => p.key === trackingParameter)?.value;
  }

  return result !== undefined ? result : "";
}

export { getParameterFromTrackingData, PromotionData, trackPromotionInteraction };
