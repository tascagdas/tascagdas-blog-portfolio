import { Suspense } from "react";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";

export default async function ProjectsPage() {
    return (<>
        <div className="">
            <h1 className="mb-8 text-xl">Projeler</h1>

            <div className="mb-8">github üzerinden public olan repositorylerimi aşağıda görebilirsiniz.</div>

            <ErrorBoundary fallback={<div>sorun oluştu (bu errorboundary)</div>}>
                <Suspense fallback={<ProjectListLoading />}>
                    <ProjectList />
                </Suspense>
            </ErrorBoundary>
        </div>
    </>)
}
