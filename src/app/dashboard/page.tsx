import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

    const sesion = await getServerSession(authOptions);

    if (!sesion) {
        redirect("/api/auth/signin");
    }


    return (
        <div className="grid gap-6 grid-cols-1">

            <WidgetItem title="Usuario conectado S-Side" >
                <div className="flex flex-col">
                    <span>{sesion.user?.name}</span>
                    <span>{sesion.user?.image}</span>
                    <span>{sesion.user?.email}</span>

                    <div>
                        {JSON.stringify(sesion.user)}
                    </div>
                </div>
            </WidgetItem>

        </div>
    );
}