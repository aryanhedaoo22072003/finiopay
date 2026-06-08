import Image from "next/image";
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div className="pt-16">
      Split Expense
      <br/>
      <Button variant="destructive">Subscribe</Button>
    </div>
  );
}
