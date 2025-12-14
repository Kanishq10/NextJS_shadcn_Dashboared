import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    { "id": "a18c9b70", "amount": 2499, "status": "success", "email": "alex@contoso.com" },
    { "id": "c3f7d21a", "amount": 799, "status": "processing", "email": "nina@fabric.io" },
    { "id": "e91b0d5c", "amount": 150, "status": "failed", "email": "samir@northwind.com" },
    { "id": "0b2a4ee3", "amount": 4500, "status": "success", "email": "lee@fabrikam.com" },
    { "id": "6fd9a1c2", "amount": 1200, "status": "pending", "email": "ravi@example.org" },
    { "id": "9a7e3f55", "amount": 299, "status": "success", "email": "jane@adatum.com" },
    { "id": "54ce8a91", "amount": 220, "status": "processing", "email": "maria@woodgrovebank.com" },
    { "id": "bf13d7e8", "amount": 9999, "status": "failed", "email": "daniel@coho.com" },
    { "id": "1c8b2f40", "amount": 75, "status": "success", "email": "olivia@wingtiptoys.com" },
    { "id": "2a3f9c10", "amount": 1340, "status": "success", "email": "arun@contoso.com" },
    { "id": "7b5d2e31", "amount": 560, "status": "pending", "email": "megan@fabrikam.com" },
    { "id": "d4e8a7c2", "amount": 230, "status": "processing", "email": "li@adventure-works.com" },
    { "id": "9c1f0e84", "amount": 890, "status": "failed", "email": "paul@northwind.com" },
    { "id": "f0a7b932", "amount": 3100, "status": "success", "email": "sara@tailspintoys.com" },
    { "id": "63b29f5a", "amount": 75, "status": "success", "email": "noah@wideworldimporters.com" },
    { "id": "81c6e4d3", "amount": 499, "status": "processing", "email": "chris@contoso.com" },
    { "id": "a4e1b6c9", "amount": 2200, "status": "pending", "email": "emily@fabrikam.com" },
    { "id": "b7d9f3e1", "amount": 145, "status": "failed", "email": "tom@northwind.com" },
    { "id": "c2f3a9b8", "amount": 980, "status": "success", "email": "kate@adatum.com" },
    { "id": "de1a0f74", "amount": 1250, "status": "success", "email": "raj@wingtiptoys.com" },
    { "id": "e5b7d2c9", "amount": 375, "status": "processing", "email": "luke@coho.com" },
    { "id": "f6c9e1a2", "amount": 50, "status": "failed", "email": "ivy@woodgrovebank.com" },
    { "id": "08d1b7e3", "amount": 770, "status": "pending", "email": "felix@contoso.com" },
    { "id": "19e3c2a4", "amount": 425, "status": "success", "email": "nora@fabrikam.com" },
    { "id": "2af5d3b6", "amount": 640, "status": "processing", "email": "omar@coho.com" },
    { "id": "3b17e4c8", "amount": 205, "status": "failed", "email": "yara@adatum.com" },
    { "id": "4c39f5da", "amount": 1800, "status": "success", "email": "liam@northwind.com" },
    { "id": "5d5b06ec", "amount": 815, "status": "pending", "email": "zoe@wingtiptoys.com" },
    { "id": "6e7d18fe", "amount": 999, "status": "processing", "email": "hugo@tailspintoys.com" },
    { "id": "7f9f2a10", "amount": 260, "status": "failed", "email": "maya@wideworldimporters.com" },
    { "id": "80b13c22", "amount": 5200, "status": "success", "email": "ethan@fabrikam.com" },
    { "id": "91d35e34", "amount": 310, "status": "success", "email": "rhea@contoso.com" },
    { "id": "a2f57046", "amount": 120, "status": "processing", "email": "alexis@adatum.com" },
    { "id": "b3178268", "amount": 405, "status": "pending", "email": "jon@coho.com" },
    { "id": "c439948a", "amount": 870, "status": "failed", "email": "tina@northwind.com" },
    { "id": "d55ba6ac", "amount": 220, "status": "success", "email": "marco@woodgrovebank.com" },
    { "id": "e67dc8be", "amount": 1560, "status": "processing", "email": "lola@wingtiptoys.com" },
    { "id": "f79fea00", "amount": 295, "status": "pending", "email": "ziyan@tailspintoys.com" },
    { "id": "0ab20c12", "amount": 680, "status": "failed", "email": "jules@wideworldimporters.com" },
    { "id": "1bd42e24", "amount": 75, "status": "success", "email": "parker@contoso.com" },
    { "id": "2cf65036", "amount": 4100, "status": "success", "email": "reese@fabrikam.com" },
    { "id": "3d188248", "amount": 333, "status": "processing", "email": "nina@adatum.com" },
    { "id": "4e3aa45a", "amount": 140, "status": "pending", "email": "leo@coho.com" },
    { "id": "5f5cc66c", "amount": 275, "status": "failed", "email": "rachel@northwind.com" },
    { "id": "60be087e", "amount": 1999, "status": "success", "email": "ken@tailspintoys.com" },
    { "id": "71e02a90", "amount": 860, "status": "processing", "email": "mila@wingtiptoys.com" },
    { "id": "82124ca2", "amount": 135, "status": "pending", "email": "aarav@contoso.com" },
    { "id": "93346ec4", "amount": 510, "status": "failed", "email": "sophia@adatum.com" },
    { "id": "a45790d6", "amount": 760, "status": "success", "email": "lucas@fabrikam.com" },
    { "id": "b579b2e8", "amount": 420, "status": "processing", "email": "gianna@coho.com" },
    { "id": "c69bd50a", "amount": 1180, "status": "pending", "email": "jeff@northwind.com" },
    { "id": "d7bdf71c", "amount": 88, "status": "failed", "email": "nate@woodgrovebank.com" },
    { "id": "e8df193e", "amount": 240, "status": "success", "email": "hana@wideworldimporters.com" },
    { "id": "f9013b50", "amount": 3375, "status": "success", "email": "ryan@contoso.com" },
    { "id": "0a235d62", "amount": 450, "status": "processing", "email": "chloe@adatum.com" },
    { "id": "1b457f74", "amount": 995, "status": "pending", "email": "mohit@fabrikam.com" },
    { "id": "2c69a186", "amount": 310, "status": "failed", "email": "nora@coho.com" },
    { "id": "3d8bc398", "amount": 2250, "status": "success", "email": "julian@northwind.com" }
  ];
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}