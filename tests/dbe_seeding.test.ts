import { db as dbe } from '../src/services';


test("DB engine -> assets -> getAssetBundle returns a seeded entity", async () => {
	expect(await dbe.assets.getAssetBundle(1)).toBeTruthy();
	expect(await dbe.assets.getAssetBundle(-1)).toBeFalsy();
});

test("DB engine -> assets -> getAssetDetail returns a seeded entity", async () => {
	expect(await dbe.assets.getAssetDetail(1)).toBeTruthy();
	expect(await dbe.assets.getAssetDetail(-1)).toBeFalsy();
});

test("DB engine -> assets -> getAssetPortfolio returns a seeded entity", async () => {
	expect(await dbe.assets.getAssetPortfolio(1)).toBeTruthy();
	expect(await dbe.assets.getAssetPortfolio(-1)).toBeFalsy();
});

test("DB engine -> assets -> getAssetPortfolioByOwner returns a seeded entity", async () => {
	expect(await dbe.assets.getAssetPortfolioByOwner(1)).toBeTruthy();
	expect(await dbe.assets.getAssetPortfolioByOwner(-1)).toBeFalsy();
});

test("DB engine -> daos -> getDaoDetail returns a seeded entity", async () => {
	expect(await dbe.daos.getDaoDetail(1)).toBeTruthy();
	expect(await dbe.daos.getDaoDetail(-1)).toBeFalsy();
});

test("DB engine -> users -> getUserDetail returns a seeded entity", async () => {
    for (let i = 0; i < 100; i++) {
		expect(await dbe.users.getUserDetail(i + 1)).toBeTruthy();
	}
	expect(await dbe.users.getUserDetail(101)).toBeFalsy();
}, 30000);
