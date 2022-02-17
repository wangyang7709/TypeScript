/// <reference path='fourslash.ts' />

// @Filename: B.ts
////[|export default class /*1*/[|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 0 |}B|] {
////    test() {
////    }
////}|]

// @Filename: A.ts
////[|import /*2*/[|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 2 |}B|] from "./B";|]
////let b = new [|B|]();
////b.test();

goTo.marker("1");
verify.occurrencesAtPositionCount(1);

const [CDef, C, B0Def, B0, B1] = test.ranges();;

verify.renameLocations(C, [C, B0, B1]);
verify.rangesAreRenameLocations([B0, B1]);
verify.baselineFindAllReferences('1', '2')
