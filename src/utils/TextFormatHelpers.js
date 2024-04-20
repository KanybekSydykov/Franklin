export function getDescription(params,item) {
    let description =
      params.locale === "ru" ? item.description_ru : item.description_en;

    let cleanedText = description.replace(/<\/?p>/g, "");

    cleanedText = cleanedText.replace(/<br\s*\/?>/gi, "");

    // Split the text by line breaks
    return cleanedText.split("\n").filter(Boolean); // Filter out any empty lines
  }