import InboxCard from "./InboxCard"

const InboxPanel = () => {
    return <div className="col-span-2 px-1 py-2">
        <div className="px-5 text-2xl font-semibold text-black mb-8">Your inbox</div>
        <div className="flex justify-between px-5 ">
            <div className="text-base flex gap-2">
                <span className="font-semibold">5 open</span>
                <img className="w-4" src="./chevron-down-icon.svg" />
            </div>
            <div className="text-base flex gap-2">
                <span className="font-semibold">Waiting longest</span>
                <img className="w-4" src="./chevron-down-icon.svg" />
            </div>
        </div>
        <div className="px-1 py-3">
            <InboxCard visited="1" />
            <InboxCard />
            <InboxCard />
            <InboxCard />
            <InboxCard />
        </div>
    </div>
}

export default InboxPanel