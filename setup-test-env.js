import { createSerializer } from "jest-emotion"
import * as emotion from "emotion"

import "jest-dom/extend-expect"
import "react-testing-library/cleanup-after-each"
// this is basically: afterEach(cleanup)

expect.addSnapshotSerializer(createSerializer(emotion))