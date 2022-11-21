import * as dbe from '../src/dbe';


test("DB engine exposes DAO -> assets", () => {
	expect(dbe).toHaveProperty("assets");
	expect(dbe.assets).toHaveProperty("createAssetDetail");
	expect(dbe.assets).toHaveProperty("getAssetBundle");
	expect(dbe.assets).toHaveProperty("getAssetDetail");
	expect(dbe.assets).toHaveProperty("getAssetPortfolio");
	expect(dbe.assets).toHaveProperty("getAssetPortfolioByOwner");
});

test("DB engine exposes DAO -> daos", () => {
	expect(dbe).toHaveProperty("daos");
	expect(dbe.daos).toHaveProperty("getDaoDetail");
});

test("DB engine exposes DAO -> users", () => {
	expect(dbe).toHaveProperty("users");
	expect(dbe.users).toHaveProperty("getUserDetail");
});
