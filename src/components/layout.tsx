import { AnimateSharedLayout } from "framer-motion";

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <AnimateSharedLayout>
                <main>{children}</main>
            </AnimateSharedLayout>
        </>
    )
}