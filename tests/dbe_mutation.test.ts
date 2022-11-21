import * as dbe from '../src/dbe';

test("DB engine -> assets -> createAssetDetail returns a new entity identifier", async () => {
	// Create.
	const idOfEntity: number = await dbe.assets.createAssetDetail(
		1,
		"An asset bundle description",
		"An asset bundle title",
		"DRAFT"
	);
	expect(idOfEntity).toBeGreaterThan(0)

	// Query.
	let entity = await dbe.assets.getAssetDetail(idOfEntity)
	expect(entity).toBeTruthy();

	// Delete.
	await dbe.assets.deleteAssetDetail(idOfEntity);
	entity = await dbe.assets.getAssetDetail(idOfEntity)
	expect(entity).toBeFalsy();
});

