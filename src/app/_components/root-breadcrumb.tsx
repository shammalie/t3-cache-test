"use client";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "~/components/ui/breadcrumb";

export default function RootBreadcrumb() {
  const pathName = usePathname();

  const paths = pathName.split("/");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathName === "/" ? (
          <BreadcrumbItem className="text-xl font-bold tracking-tight">
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        ) : (
          paths.map((path, index) => {
            const uri = paths.slice(0, index + 1).join("/");
            console.log(uri, index, paths.length);

            return (
              <BreadcrumbItem
                key={index}
                className="text-xl font-bold tracking-tight"
              >
                {index + 1 < paths.length ? (
                  <>
                    <BreadcrumbLink key={path} asChild>
                      <Link href={!!uri ? uri : "/"}>
                        {!!path ? path : "home"}
                      </Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator>
                      <ChevronRightIcon />
                    </BreadcrumbSeparator>
                  </>
                ) : (
                  <BreadcrumbPage>{path}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            );
          })
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
