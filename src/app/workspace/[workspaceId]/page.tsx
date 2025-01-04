"use client";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
// interface WorkspaceIdPageProps {
//     params: {
//         workspaceId: string;
//     };
// };

import { useParams } from "next/navigation";

const WorkspaceIdPage = () => {
    const workspaceId = useWorkspaceId();
    const { data } = useGetWorkspace({id: workspaceId});

    return ( 
        <div>
            Data: {JSON.stringify(data)}
        </div>
     );
}
 
export default WorkspaceIdPage;