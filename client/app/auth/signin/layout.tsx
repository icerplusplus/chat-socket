import { Children } from "@/utils/types";
import { RootLayout } from "@/components/layouts";

export default function Page({ children }: Children) {
  return <RootLayout>{children}</RootLayout>;
}
