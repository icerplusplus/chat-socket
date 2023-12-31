import { Children } from "@/utils/types";
import { RootLayout } from "@/components/layouts";

export default function Index({ children }: Children) {
  return <RootLayout>{children}</RootLayout>;
}
