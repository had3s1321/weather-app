export default async function Page({
	params
}: {
	params: Promise<{ cityId: string }>;
}) {
	const { cityId } = await params;
	return <div>Current City : {cityId}</div>;
}
