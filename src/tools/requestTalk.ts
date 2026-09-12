import type { QuoteInfo } from "@/types";

export async function requestTalk(): Promise<QuoteInfo | undefined> {
  try {
    const uapisUrl: string =
      "https://uapis.cn/api/v1/saying/random?mode=daily&source=sentences bundle";
    const response: Response = await fetch(uapisUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: any = await response.json();
    const { content, author } = data.item;
    const quoteInfo: QuoteInfo = { content, author };
    return quoteInfo;
  } catch (err) {
    console.error(err);
  }
}
