import { createSerializer } from '.'
import * as emotion from 'emotion'

expect.addSnapshotSerializer(createSerializer(emotion))
