import { Button } from "@heroui/react";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className="text-4xl">AccentFont heading</h1>
        <p className="font-text">DolomanPavljenko text вффдхй äö</p>
        <span className="font-words text-sm">
          Variable Montserrat вффдхй äö
        </span>
        <Button color="primary" className="px-4 py-2 rounded">
          Button with no font
        </Button>
        <p>p tag with no font</p>
      </section>
    </DefaultLayout>
  );
}
