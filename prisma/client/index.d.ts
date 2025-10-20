
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Block
 * 
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model TokenTransfer
 * 
 */
export type TokenTransfer = $Result.DefaultSelection<Prisma.$TokenTransferPayload>
/**
 * Model WalletDaily
 * 
 */
export type WalletDaily = $Result.DefaultSelection<Prisma.$WalletDailyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ChainId: {
  ETH: 'ETH',
  OP: 'OP',
  BSC: 'BSC',
  POLY: 'POLY',
  ARB: 'ARB'
};

export type ChainId = (typeof ChainId)[keyof typeof ChainId]

}

export type ChainId = $Enums.ChainId

export const ChainId: typeof $Enums.ChainId

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Blocks
 * const blocks = await prisma.block.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Blocks
   * const blocks = await prisma.block.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenTransfer`: Exposes CRUD operations for the **TokenTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenTransfers
    * const tokenTransfers = await prisma.tokenTransfer.findMany()
    * ```
    */
  get tokenTransfer(): Prisma.TokenTransferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walletDaily`: Exposes CRUD operations for the **WalletDaily** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletDailies
    * const walletDailies = await prisma.walletDaily.findMany()
    * ```
    */
  get walletDaily(): Prisma.WalletDailyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Block: 'Block',
    Transaction: 'Transaction',
    TokenTransfer: 'TokenTransfer',
    WalletDaily: 'WalletDaily'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "block" | "transaction" | "tokenTransfer" | "walletDaily"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      TokenTransfer: {
        payload: Prisma.$TokenTransferPayload<ExtArgs>
        fields: Prisma.TokenTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransferPayload>
          }
          findFirst: {
            args: Prisma.TokenTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransferPayload>
          }
          findMany: {
            args: Prisma.TokenTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransferPayload>[]
          }
          create: {
            args: Prisma.TokenTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransferPayload>
          }
          createMany: {
            args: Prisma.TokenTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenTransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransferPayload>[]
          }
          delete: {
            args: Prisma.TokenTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransferPayload>
          }
          update: {
            args: Prisma.TokenTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransferPayload>
          }
          deleteMany: {
            args: Prisma.TokenTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenTransferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransferPayload>[]
          }
          upsert: {
            args: Prisma.TokenTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenTransferPayload>
          }
          aggregate: {
            args: Prisma.TokenTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenTransfer>
          }
          groupBy: {
            args: Prisma.TokenTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenTransferCountArgs<ExtArgs>
            result: $Utils.Optional<TokenTransferCountAggregateOutputType> | number
          }
        }
      }
      WalletDaily: {
        payload: Prisma.$WalletDailyPayload<ExtArgs>
        fields: Prisma.WalletDailyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletDailyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletDailyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletDailyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletDailyPayload>
          }
          findFirst: {
            args: Prisma.WalletDailyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletDailyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletDailyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletDailyPayload>
          }
          findMany: {
            args: Prisma.WalletDailyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletDailyPayload>[]
          }
          create: {
            args: Prisma.WalletDailyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletDailyPayload>
          }
          createMany: {
            args: Prisma.WalletDailyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletDailyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletDailyPayload>[]
          }
          delete: {
            args: Prisma.WalletDailyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletDailyPayload>
          }
          update: {
            args: Prisma.WalletDailyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletDailyPayload>
          }
          deleteMany: {
            args: Prisma.WalletDailyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletDailyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletDailyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletDailyPayload>[]
          }
          upsert: {
            args: Prisma.WalletDailyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletDailyPayload>
          }
          aggregate: {
            args: Prisma.WalletDailyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletDaily>
          }
          groupBy: {
            args: Prisma.WalletDailyGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletDailyGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletDailyCountArgs<ExtArgs>
            result: $Utils.Optional<WalletDailyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    block?: BlockOmit
    transaction?: TransactionOmit
    tokenTransfer?: TokenTransferOmit
    walletDaily?: WalletDailyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockAvgAggregateOutputType = {
    id: number | null
  }

  export type BlockSumAggregateOutputType = {
    id: bigint | null
  }

  export type BlockMinAggregateOutputType = {
    id: bigint | null
    chain: $Enums.ChainId | null
    hash: string | null
    parentHash: string | null
    timestamp: Date | null
    processedAt: Date | null
  }

  export type BlockMaxAggregateOutputType = {
    id: bigint | null
    chain: $Enums.ChainId | null
    hash: string | null
    parentHash: string | null
    timestamp: Date | null
    processedAt: Date | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    chain: number
    hash: number
    parentHash: number
    timestamp: number
    processedAt: number
    _all: number
  }


  export type BlockAvgAggregateInputType = {
    id?: true
  }

  export type BlockSumAggregateInputType = {
    id?: true
  }

  export type BlockMinAggregateInputType = {
    id?: true
    chain?: true
    hash?: true
    parentHash?: true
    timestamp?: true
    processedAt?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    chain?: true
    hash?: true
    parentHash?: true
    timestamp?: true
    processedAt?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    chain?: true
    hash?: true
    parentHash?: true
    timestamp?: true
    processedAt?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _avg?: BlockAvgAggregateInputType
    _sum?: BlockSumAggregateInputType
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: bigint
    chain: $Enums.ChainId
    hash: string
    parentHash: string
    timestamp: Date
    processedAt: Date
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain?: boolean
    hash?: boolean
    parentHash?: boolean
    timestamp?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["block"]>

  export type BlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain?: boolean
    hash?: boolean
    parentHash?: boolean
    timestamp?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["block"]>

  export type BlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain?: boolean
    hash?: boolean
    parentHash?: boolean
    timestamp?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["block"]>

  export type BlockSelectScalar = {
    id?: boolean
    chain?: boolean
    hash?: boolean
    parentHash?: boolean
    timestamp?: boolean
    processedAt?: boolean
  }

  export type BlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chain" | "hash" | "parentHash" | "timestamp" | "processedAt", ExtArgs["result"]["block"]>

  export type $BlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      chain: $Enums.ChainId
      hash: string
      parentHash: string
      timestamp: Date
      processedAt: Date
    }, ExtArgs["result"]["block"]>
    composites: {}
  }

  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockFindUniqueArgs>(args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockFindFirstArgs>(args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockFindManyArgs>(args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
     */
    create<T extends BlockCreateArgs>(args: SelectSubset<T, BlockCreateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocks.
     * @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockCreateManyArgs>(args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blocks and returns the data saved in the database.
     * @param {BlockCreateManyAndReturnArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
     */
    delete<T extends BlockDeleteArgs>(args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockUpdateArgs>(args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockDeleteManyArgs>(args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockUpdateManyArgs>(args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks and returns the data updated in the database.
     * @param {BlockUpdateManyAndReturnArgs} args - Arguments to update many Blocks.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
     */
    upsert<T extends BlockUpsertArgs>(args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Block model
   */
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", 'BigInt'>
    readonly chain: FieldRef<"Block", 'ChainId'>
    readonly hash: FieldRef<"Block", 'String'>
    readonly parentHash: FieldRef<"Block", 'String'>
    readonly timestamp: FieldRef<"Block", 'DateTime'>
    readonly processedAt: FieldRef<"Block", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }

  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Block createManyAndReturn
   */
  export type BlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Block updateManyAndReturn
   */
  export type BlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }

  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to delete.
     */
    limit?: number
  }

  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    blockId: number | null
    valueWei: Decimal | null
    idx: number | null
  }

  export type TransactionSumAggregateOutputType = {
    blockId: bigint | null
    valueWei: Decimal | null
    idx: number | null
  }

  export type TransactionMinAggregateOutputType = {
    hash: string | null
    blockId: bigint | null
    chain: $Enums.ChainId | null
    from: string | null
    to: string | null
    valueWei: Decimal | null
    success: boolean | null
    idx: number | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    hash: string | null
    blockId: bigint | null
    chain: $Enums.ChainId | null
    from: string | null
    to: string | null
    valueWei: Decimal | null
    success: boolean | null
    idx: number | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    hash: number
    blockId: number
    chain: number
    from: number
    to: number
    valueWei: number
    success: number
    idx: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    blockId?: true
    valueWei?: true
    idx?: true
  }

  export type TransactionSumAggregateInputType = {
    blockId?: true
    valueWei?: true
    idx?: true
  }

  export type TransactionMinAggregateInputType = {
    hash?: true
    blockId?: true
    chain?: true
    from?: true
    to?: true
    valueWei?: true
    success?: true
    idx?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    hash?: true
    blockId?: true
    chain?: true
    from?: true
    to?: true
    valueWei?: true
    success?: true
    idx?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    hash?: true
    blockId?: true
    chain?: true
    from?: true
    to?: true
    valueWei?: true
    success?: true
    idx?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    hash: string
    blockId: bigint
    chain: $Enums.ChainId
    from: string
    to: string | null
    valueWei: Decimal
    success: boolean
    idx: number
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hash?: boolean
    blockId?: boolean
    chain?: boolean
    from?: boolean
    to?: boolean
    valueWei?: boolean
    success?: boolean
    idx?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hash?: boolean
    blockId?: boolean
    chain?: boolean
    from?: boolean
    to?: boolean
    valueWei?: boolean
    success?: boolean
    idx?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hash?: boolean
    blockId?: boolean
    chain?: boolean
    from?: boolean
    to?: boolean
    valueWei?: boolean
    success?: boolean
    idx?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    hash?: boolean
    blockId?: boolean
    chain?: boolean
    from?: boolean
    to?: boolean
    valueWei?: boolean
    success?: boolean
    idx?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"hash" | "blockId" | "chain" | "from" | "to" | "valueWei" | "success" | "idx" | "createdAt", ExtArgs["result"]["transaction"]>

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      hash: string
      blockId: bigint
      chain: $Enums.ChainId
      from: string
      to: string | null
      valueWei: Prisma.Decimal
      success: boolean
      idx: number
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `hash`
     * const transactionWithHashOnly = await prisma.transaction.findMany({ select: { hash: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `hash`
     * const transactionWithHashOnly = await prisma.transaction.createManyAndReturn({
     *   select: { hash: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `hash`
     * const transactionWithHashOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { hash: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly hash: FieldRef<"Transaction", 'String'>
    readonly blockId: FieldRef<"Transaction", 'BigInt'>
    readonly chain: FieldRef<"Transaction", 'ChainId'>
    readonly from: FieldRef<"Transaction", 'String'>
    readonly to: FieldRef<"Transaction", 'String'>
    readonly valueWei: FieldRef<"Transaction", 'Decimal'>
    readonly success: FieldRef<"Transaction", 'Boolean'>
    readonly idx: FieldRef<"Transaction", 'Int'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
  }


  /**
   * Model TokenTransfer
   */

  export type AggregateTokenTransfer = {
    _count: TokenTransferCountAggregateOutputType | null
    _avg: TokenTransferAvgAggregateOutputType | null
    _sum: TokenTransferSumAggregateOutputType | null
    _min: TokenTransferMinAggregateOutputType | null
    _max: TokenTransferMaxAggregateOutputType | null
  }

  export type TokenTransferAvgAggregateOutputType = {
    id: number | null
    blockId: number | null
    logIdx: number | null
    amountRaw: Decimal | null
  }

  export type TokenTransferSumAggregateOutputType = {
    id: bigint | null
    blockId: bigint | null
    logIdx: number | null
    amountRaw: Decimal | null
  }

  export type TokenTransferMinAggregateOutputType = {
    id: bigint | null
    chain: $Enums.ChainId | null
    blockId: bigint | null
    txHash: string | null
    logIdx: number | null
    token: string | null
    from: string | null
    to: string | null
    amountRaw: Decimal | null
    createdAt: Date | null
  }

  export type TokenTransferMaxAggregateOutputType = {
    id: bigint | null
    chain: $Enums.ChainId | null
    blockId: bigint | null
    txHash: string | null
    logIdx: number | null
    token: string | null
    from: string | null
    to: string | null
    amountRaw: Decimal | null
    createdAt: Date | null
  }

  export type TokenTransferCountAggregateOutputType = {
    id: number
    chain: number
    blockId: number
    txHash: number
    logIdx: number
    token: number
    from: number
    to: number
    amountRaw: number
    createdAt: number
    _all: number
  }


  export type TokenTransferAvgAggregateInputType = {
    id?: true
    blockId?: true
    logIdx?: true
    amountRaw?: true
  }

  export type TokenTransferSumAggregateInputType = {
    id?: true
    blockId?: true
    logIdx?: true
    amountRaw?: true
  }

  export type TokenTransferMinAggregateInputType = {
    id?: true
    chain?: true
    blockId?: true
    txHash?: true
    logIdx?: true
    token?: true
    from?: true
    to?: true
    amountRaw?: true
    createdAt?: true
  }

  export type TokenTransferMaxAggregateInputType = {
    id?: true
    chain?: true
    blockId?: true
    txHash?: true
    logIdx?: true
    token?: true
    from?: true
    to?: true
    amountRaw?: true
    createdAt?: true
  }

  export type TokenTransferCountAggregateInputType = {
    id?: true
    chain?: true
    blockId?: true
    txHash?: true
    logIdx?: true
    token?: true
    from?: true
    to?: true
    amountRaw?: true
    createdAt?: true
    _all?: true
  }

  export type TokenTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenTransfer to aggregate.
     */
    where?: TokenTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenTransfers to fetch.
     */
    orderBy?: TokenTransferOrderByWithRelationInput | TokenTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenTransfers
    **/
    _count?: true | TokenTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenTransferMaxAggregateInputType
  }

  export type GetTokenTransferAggregateType<T extends TokenTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenTransfer[P]>
      : GetScalarType<T[P], AggregateTokenTransfer[P]>
  }




  export type TokenTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenTransferWhereInput
    orderBy?: TokenTransferOrderByWithAggregationInput | TokenTransferOrderByWithAggregationInput[]
    by: TokenTransferScalarFieldEnum[] | TokenTransferScalarFieldEnum
    having?: TokenTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenTransferCountAggregateInputType | true
    _avg?: TokenTransferAvgAggregateInputType
    _sum?: TokenTransferSumAggregateInputType
    _min?: TokenTransferMinAggregateInputType
    _max?: TokenTransferMaxAggregateInputType
  }

  export type TokenTransferGroupByOutputType = {
    id: bigint
    chain: $Enums.ChainId
    blockId: bigint
    txHash: string
    logIdx: number
    token: string
    from: string
    to: string
    amountRaw: Decimal
    createdAt: Date
    _count: TokenTransferCountAggregateOutputType | null
    _avg: TokenTransferAvgAggregateOutputType | null
    _sum: TokenTransferSumAggregateOutputType | null
    _min: TokenTransferMinAggregateOutputType | null
    _max: TokenTransferMaxAggregateOutputType | null
  }

  type GetTokenTransferGroupByPayload<T extends TokenTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenTransferGroupByOutputType[P]>
            : GetScalarType<T[P], TokenTransferGroupByOutputType[P]>
        }
      >
    >


  export type TokenTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain?: boolean
    blockId?: boolean
    txHash?: boolean
    logIdx?: boolean
    token?: boolean
    from?: boolean
    to?: boolean
    amountRaw?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tokenTransfer"]>

  export type TokenTransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain?: boolean
    blockId?: boolean
    txHash?: boolean
    logIdx?: boolean
    token?: boolean
    from?: boolean
    to?: boolean
    amountRaw?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tokenTransfer"]>

  export type TokenTransferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain?: boolean
    blockId?: boolean
    txHash?: boolean
    logIdx?: boolean
    token?: boolean
    from?: boolean
    to?: boolean
    amountRaw?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tokenTransfer"]>

  export type TokenTransferSelectScalar = {
    id?: boolean
    chain?: boolean
    blockId?: boolean
    txHash?: boolean
    logIdx?: boolean
    token?: boolean
    from?: boolean
    to?: boolean
    amountRaw?: boolean
    createdAt?: boolean
  }

  export type TokenTransferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chain" | "blockId" | "txHash" | "logIdx" | "token" | "from" | "to" | "amountRaw" | "createdAt", ExtArgs["result"]["tokenTransfer"]>

  export type $TokenTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenTransfer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      chain: $Enums.ChainId
      blockId: bigint
      txHash: string
      logIdx: number
      token: string
      from: string
      to: string
      amountRaw: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["tokenTransfer"]>
    composites: {}
  }

  type TokenTransferGetPayload<S extends boolean | null | undefined | TokenTransferDefaultArgs> = $Result.GetResult<Prisma.$TokenTransferPayload, S>

  type TokenTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenTransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenTransferCountAggregateInputType | true
    }

  export interface TokenTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenTransfer'], meta: { name: 'TokenTransfer' } }
    /**
     * Find zero or one TokenTransfer that matches the filter.
     * @param {TokenTransferFindUniqueArgs} args - Arguments to find a TokenTransfer
     * @example
     * // Get one TokenTransfer
     * const tokenTransfer = await prisma.tokenTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenTransferFindUniqueArgs>(args: SelectSubset<T, TokenTransferFindUniqueArgs<ExtArgs>>): Prisma__TokenTransferClient<$Result.GetResult<Prisma.$TokenTransferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenTransfer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenTransferFindUniqueOrThrowArgs} args - Arguments to find a TokenTransfer
     * @example
     * // Get one TokenTransfer
     * const tokenTransfer = await prisma.tokenTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenTransferClient<$Result.GetResult<Prisma.$TokenTransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransferFindFirstArgs} args - Arguments to find a TokenTransfer
     * @example
     * // Get one TokenTransfer
     * const tokenTransfer = await prisma.tokenTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenTransferFindFirstArgs>(args?: SelectSubset<T, TokenTransferFindFirstArgs<ExtArgs>>): Prisma__TokenTransferClient<$Result.GetResult<Prisma.$TokenTransferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransferFindFirstOrThrowArgs} args - Arguments to find a TokenTransfer
     * @example
     * // Get one TokenTransfer
     * const tokenTransfer = await prisma.tokenTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenTransferClient<$Result.GetResult<Prisma.$TokenTransferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenTransfers
     * const tokenTransfers = await prisma.tokenTransfer.findMany()
     * 
     * // Get first 10 TokenTransfers
     * const tokenTransfers = await prisma.tokenTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenTransferWithIdOnly = await prisma.tokenTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenTransferFindManyArgs>(args?: SelectSubset<T, TokenTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenTransfer.
     * @param {TokenTransferCreateArgs} args - Arguments to create a TokenTransfer.
     * @example
     * // Create one TokenTransfer
     * const TokenTransfer = await prisma.tokenTransfer.create({
     *   data: {
     *     // ... data to create a TokenTransfer
     *   }
     * })
     * 
     */
    create<T extends TokenTransferCreateArgs>(args: SelectSubset<T, TokenTransferCreateArgs<ExtArgs>>): Prisma__TokenTransferClient<$Result.GetResult<Prisma.$TokenTransferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenTransfers.
     * @param {TokenTransferCreateManyArgs} args - Arguments to create many TokenTransfers.
     * @example
     * // Create many TokenTransfers
     * const tokenTransfer = await prisma.tokenTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenTransferCreateManyArgs>(args?: SelectSubset<T, TokenTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenTransfers and returns the data saved in the database.
     * @param {TokenTransferCreateManyAndReturnArgs} args - Arguments to create many TokenTransfers.
     * @example
     * // Create many TokenTransfers
     * const tokenTransfer = await prisma.tokenTransfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenTransfers and only return the `id`
     * const tokenTransferWithIdOnly = await prisma.tokenTransfer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenTransferCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenTransferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenTransfer.
     * @param {TokenTransferDeleteArgs} args - Arguments to delete one TokenTransfer.
     * @example
     * // Delete one TokenTransfer
     * const TokenTransfer = await prisma.tokenTransfer.delete({
     *   where: {
     *     // ... filter to delete one TokenTransfer
     *   }
     * })
     * 
     */
    delete<T extends TokenTransferDeleteArgs>(args: SelectSubset<T, TokenTransferDeleteArgs<ExtArgs>>): Prisma__TokenTransferClient<$Result.GetResult<Prisma.$TokenTransferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenTransfer.
     * @param {TokenTransferUpdateArgs} args - Arguments to update one TokenTransfer.
     * @example
     * // Update one TokenTransfer
     * const tokenTransfer = await prisma.tokenTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenTransferUpdateArgs>(args: SelectSubset<T, TokenTransferUpdateArgs<ExtArgs>>): Prisma__TokenTransferClient<$Result.GetResult<Prisma.$TokenTransferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenTransfers.
     * @param {TokenTransferDeleteManyArgs} args - Arguments to filter TokenTransfers to delete.
     * @example
     * // Delete a few TokenTransfers
     * const { count } = await prisma.tokenTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenTransferDeleteManyArgs>(args?: SelectSubset<T, TokenTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenTransfers
     * const tokenTransfer = await prisma.tokenTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenTransferUpdateManyArgs>(args: SelectSubset<T, TokenTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenTransfers and returns the data updated in the database.
     * @param {TokenTransferUpdateManyAndReturnArgs} args - Arguments to update many TokenTransfers.
     * @example
     * // Update many TokenTransfers
     * const tokenTransfer = await prisma.tokenTransfer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenTransfers and only return the `id`
     * const tokenTransferWithIdOnly = await prisma.tokenTransfer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenTransferUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenTransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenTransferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenTransfer.
     * @param {TokenTransferUpsertArgs} args - Arguments to update or create a TokenTransfer.
     * @example
     * // Update or create a TokenTransfer
     * const tokenTransfer = await prisma.tokenTransfer.upsert({
     *   create: {
     *     // ... data to create a TokenTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenTransfer we want to update
     *   }
     * })
     */
    upsert<T extends TokenTransferUpsertArgs>(args: SelectSubset<T, TokenTransferUpsertArgs<ExtArgs>>): Prisma__TokenTransferClient<$Result.GetResult<Prisma.$TokenTransferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransferCountArgs} args - Arguments to filter TokenTransfers to count.
     * @example
     * // Count the number of TokenTransfers
     * const count = await prisma.tokenTransfer.count({
     *   where: {
     *     // ... the filter for the TokenTransfers we want to count
     *   }
     * })
    **/
    count<T extends TokenTransferCountArgs>(
      args?: Subset<T, TokenTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenTransferAggregateArgs>(args: Subset<T, TokenTransferAggregateArgs>): Prisma.PrismaPromise<GetTokenTransferAggregateType<T>>

    /**
     * Group by TokenTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenTransferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenTransferGroupByArgs['orderBy'] }
        : { orderBy?: TokenTransferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenTransfer model
   */
  readonly fields: TokenTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenTransfer model
   */
  interface TokenTransferFieldRefs {
    readonly id: FieldRef<"TokenTransfer", 'BigInt'>
    readonly chain: FieldRef<"TokenTransfer", 'ChainId'>
    readonly blockId: FieldRef<"TokenTransfer", 'BigInt'>
    readonly txHash: FieldRef<"TokenTransfer", 'String'>
    readonly logIdx: FieldRef<"TokenTransfer", 'Int'>
    readonly token: FieldRef<"TokenTransfer", 'String'>
    readonly from: FieldRef<"TokenTransfer", 'String'>
    readonly to: FieldRef<"TokenTransfer", 'String'>
    readonly amountRaw: FieldRef<"TokenTransfer", 'Decimal'>
    readonly createdAt: FieldRef<"TokenTransfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenTransfer findUnique
   */
  export type TokenTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
    /**
     * Filter, which TokenTransfer to fetch.
     */
    where: TokenTransferWhereUniqueInput
  }

  /**
   * TokenTransfer findUniqueOrThrow
   */
  export type TokenTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
    /**
     * Filter, which TokenTransfer to fetch.
     */
    where: TokenTransferWhereUniqueInput
  }

  /**
   * TokenTransfer findFirst
   */
  export type TokenTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
    /**
     * Filter, which TokenTransfer to fetch.
     */
    where?: TokenTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenTransfers to fetch.
     */
    orderBy?: TokenTransferOrderByWithRelationInput | TokenTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenTransfers.
     */
    cursor?: TokenTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenTransfers.
     */
    distinct?: TokenTransferScalarFieldEnum | TokenTransferScalarFieldEnum[]
  }

  /**
   * TokenTransfer findFirstOrThrow
   */
  export type TokenTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
    /**
     * Filter, which TokenTransfer to fetch.
     */
    where?: TokenTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenTransfers to fetch.
     */
    orderBy?: TokenTransferOrderByWithRelationInput | TokenTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenTransfers.
     */
    cursor?: TokenTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenTransfers.
     */
    distinct?: TokenTransferScalarFieldEnum | TokenTransferScalarFieldEnum[]
  }

  /**
   * TokenTransfer findMany
   */
  export type TokenTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
    /**
     * Filter, which TokenTransfers to fetch.
     */
    where?: TokenTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenTransfers to fetch.
     */
    orderBy?: TokenTransferOrderByWithRelationInput | TokenTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenTransfers.
     */
    cursor?: TokenTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenTransfers.
     */
    skip?: number
    distinct?: TokenTransferScalarFieldEnum | TokenTransferScalarFieldEnum[]
  }

  /**
   * TokenTransfer create
   */
  export type TokenTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
    /**
     * The data needed to create a TokenTransfer.
     */
    data: XOR<TokenTransferCreateInput, TokenTransferUncheckedCreateInput>
  }

  /**
   * TokenTransfer createMany
   */
  export type TokenTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenTransfers.
     */
    data: TokenTransferCreateManyInput | TokenTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenTransfer createManyAndReturn
   */
  export type TokenTransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
    /**
     * The data used to create many TokenTransfers.
     */
    data: TokenTransferCreateManyInput | TokenTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenTransfer update
   */
  export type TokenTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
    /**
     * The data needed to update a TokenTransfer.
     */
    data: XOR<TokenTransferUpdateInput, TokenTransferUncheckedUpdateInput>
    /**
     * Choose, which TokenTransfer to update.
     */
    where: TokenTransferWhereUniqueInput
  }

  /**
   * TokenTransfer updateMany
   */
  export type TokenTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenTransfers.
     */
    data: XOR<TokenTransferUpdateManyMutationInput, TokenTransferUncheckedUpdateManyInput>
    /**
     * Filter which TokenTransfers to update
     */
    where?: TokenTransferWhereInput
    /**
     * Limit how many TokenTransfers to update.
     */
    limit?: number
  }

  /**
   * TokenTransfer updateManyAndReturn
   */
  export type TokenTransferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
    /**
     * The data used to update TokenTransfers.
     */
    data: XOR<TokenTransferUpdateManyMutationInput, TokenTransferUncheckedUpdateManyInput>
    /**
     * Filter which TokenTransfers to update
     */
    where?: TokenTransferWhereInput
    /**
     * Limit how many TokenTransfers to update.
     */
    limit?: number
  }

  /**
   * TokenTransfer upsert
   */
  export type TokenTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
    /**
     * The filter to search for the TokenTransfer to update in case it exists.
     */
    where: TokenTransferWhereUniqueInput
    /**
     * In case the TokenTransfer found by the `where` argument doesn't exist, create a new TokenTransfer with this data.
     */
    create: XOR<TokenTransferCreateInput, TokenTransferUncheckedCreateInput>
    /**
     * In case the TokenTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenTransferUpdateInput, TokenTransferUncheckedUpdateInput>
  }

  /**
   * TokenTransfer delete
   */
  export type TokenTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
    /**
     * Filter which TokenTransfer to delete.
     */
    where: TokenTransferWhereUniqueInput
  }

  /**
   * TokenTransfer deleteMany
   */
  export type TokenTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenTransfers to delete
     */
    where?: TokenTransferWhereInput
    /**
     * Limit how many TokenTransfers to delete.
     */
    limit?: number
  }

  /**
   * TokenTransfer without action
   */
  export type TokenTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenTransfer
     */
    select?: TokenTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenTransfer
     */
    omit?: TokenTransferOmit<ExtArgs> | null
  }


  /**
   * Model WalletDaily
   */

  export type AggregateWalletDaily = {
    _count: WalletDailyCountAggregateOutputType | null
    _avg: WalletDailyAvgAggregateOutputType | null
    _sum: WalletDailySumAggregateOutputType | null
    _min: WalletDailyMinAggregateOutputType | null
    _max: WalletDailyMaxAggregateOutputType | null
  }

  export type WalletDailyAvgAggregateOutputType = {
    id: number | null
    txCount: number | null
    volumeWei: Decimal | null
  }

  export type WalletDailySumAggregateOutputType = {
    id: bigint | null
    txCount: number | null
    volumeWei: Decimal | null
  }

  export type WalletDailyMinAggregateOutputType = {
    id: bigint | null
    chain: $Enums.ChainId | null
    address: string | null
    day: Date | null
    txCount: number | null
    volumeWei: Decimal | null
  }

  export type WalletDailyMaxAggregateOutputType = {
    id: bigint | null
    chain: $Enums.ChainId | null
    address: string | null
    day: Date | null
    txCount: number | null
    volumeWei: Decimal | null
  }

  export type WalletDailyCountAggregateOutputType = {
    id: number
    chain: number
    address: number
    day: number
    txCount: number
    volumeWei: number
    _all: number
  }


  export type WalletDailyAvgAggregateInputType = {
    id?: true
    txCount?: true
    volumeWei?: true
  }

  export type WalletDailySumAggregateInputType = {
    id?: true
    txCount?: true
    volumeWei?: true
  }

  export type WalletDailyMinAggregateInputType = {
    id?: true
    chain?: true
    address?: true
    day?: true
    txCount?: true
    volumeWei?: true
  }

  export type WalletDailyMaxAggregateInputType = {
    id?: true
    chain?: true
    address?: true
    day?: true
    txCount?: true
    volumeWei?: true
  }

  export type WalletDailyCountAggregateInputType = {
    id?: true
    chain?: true
    address?: true
    day?: true
    txCount?: true
    volumeWei?: true
    _all?: true
  }

  export type WalletDailyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletDaily to aggregate.
     */
    where?: WalletDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletDailies to fetch.
     */
    orderBy?: WalletDailyOrderByWithRelationInput | WalletDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletDailies
    **/
    _count?: true | WalletDailyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletDailyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletDailySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletDailyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletDailyMaxAggregateInputType
  }

  export type GetWalletDailyAggregateType<T extends WalletDailyAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletDaily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletDaily[P]>
      : GetScalarType<T[P], AggregateWalletDaily[P]>
  }




  export type WalletDailyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletDailyWhereInput
    orderBy?: WalletDailyOrderByWithAggregationInput | WalletDailyOrderByWithAggregationInput[]
    by: WalletDailyScalarFieldEnum[] | WalletDailyScalarFieldEnum
    having?: WalletDailyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletDailyCountAggregateInputType | true
    _avg?: WalletDailyAvgAggregateInputType
    _sum?: WalletDailySumAggregateInputType
    _min?: WalletDailyMinAggregateInputType
    _max?: WalletDailyMaxAggregateInputType
  }

  export type WalletDailyGroupByOutputType = {
    id: bigint
    chain: $Enums.ChainId
    address: string
    day: Date
    txCount: number
    volumeWei: Decimal
    _count: WalletDailyCountAggregateOutputType | null
    _avg: WalletDailyAvgAggregateOutputType | null
    _sum: WalletDailySumAggregateOutputType | null
    _min: WalletDailyMinAggregateOutputType | null
    _max: WalletDailyMaxAggregateOutputType | null
  }

  type GetWalletDailyGroupByPayload<T extends WalletDailyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletDailyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletDailyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletDailyGroupByOutputType[P]>
            : GetScalarType<T[P], WalletDailyGroupByOutputType[P]>
        }
      >
    >


  export type WalletDailySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain?: boolean
    address?: boolean
    day?: boolean
    txCount?: boolean
    volumeWei?: boolean
  }, ExtArgs["result"]["walletDaily"]>

  export type WalletDailySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain?: boolean
    address?: boolean
    day?: boolean
    txCount?: boolean
    volumeWei?: boolean
  }, ExtArgs["result"]["walletDaily"]>

  export type WalletDailySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain?: boolean
    address?: boolean
    day?: boolean
    txCount?: boolean
    volumeWei?: boolean
  }, ExtArgs["result"]["walletDaily"]>

  export type WalletDailySelectScalar = {
    id?: boolean
    chain?: boolean
    address?: boolean
    day?: boolean
    txCount?: boolean
    volumeWei?: boolean
  }

  export type WalletDailyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chain" | "address" | "day" | "txCount" | "volumeWei", ExtArgs["result"]["walletDaily"]>

  export type $WalletDailyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletDaily"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      chain: $Enums.ChainId
      address: string
      day: Date
      txCount: number
      volumeWei: Prisma.Decimal
    }, ExtArgs["result"]["walletDaily"]>
    composites: {}
  }

  type WalletDailyGetPayload<S extends boolean | null | undefined | WalletDailyDefaultArgs> = $Result.GetResult<Prisma.$WalletDailyPayload, S>

  type WalletDailyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletDailyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletDailyCountAggregateInputType | true
    }

  export interface WalletDailyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletDaily'], meta: { name: 'WalletDaily' } }
    /**
     * Find zero or one WalletDaily that matches the filter.
     * @param {WalletDailyFindUniqueArgs} args - Arguments to find a WalletDaily
     * @example
     * // Get one WalletDaily
     * const walletDaily = await prisma.walletDaily.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletDailyFindUniqueArgs>(args: SelectSubset<T, WalletDailyFindUniqueArgs<ExtArgs>>): Prisma__WalletDailyClient<$Result.GetResult<Prisma.$WalletDailyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalletDaily that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletDailyFindUniqueOrThrowArgs} args - Arguments to find a WalletDaily
     * @example
     * // Get one WalletDaily
     * const walletDaily = await prisma.walletDaily.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletDailyFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletDailyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletDailyClient<$Result.GetResult<Prisma.$WalletDailyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletDaily that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletDailyFindFirstArgs} args - Arguments to find a WalletDaily
     * @example
     * // Get one WalletDaily
     * const walletDaily = await prisma.walletDaily.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletDailyFindFirstArgs>(args?: SelectSubset<T, WalletDailyFindFirstArgs<ExtArgs>>): Prisma__WalletDailyClient<$Result.GetResult<Prisma.$WalletDailyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletDaily that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletDailyFindFirstOrThrowArgs} args - Arguments to find a WalletDaily
     * @example
     * // Get one WalletDaily
     * const walletDaily = await prisma.walletDaily.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletDailyFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletDailyFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletDailyClient<$Result.GetResult<Prisma.$WalletDailyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalletDailies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletDailyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletDailies
     * const walletDailies = await prisma.walletDaily.findMany()
     * 
     * // Get first 10 WalletDailies
     * const walletDailies = await prisma.walletDaily.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletDailyWithIdOnly = await prisma.walletDaily.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletDailyFindManyArgs>(args?: SelectSubset<T, WalletDailyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletDailyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalletDaily.
     * @param {WalletDailyCreateArgs} args - Arguments to create a WalletDaily.
     * @example
     * // Create one WalletDaily
     * const WalletDaily = await prisma.walletDaily.create({
     *   data: {
     *     // ... data to create a WalletDaily
     *   }
     * })
     * 
     */
    create<T extends WalletDailyCreateArgs>(args: SelectSubset<T, WalletDailyCreateArgs<ExtArgs>>): Prisma__WalletDailyClient<$Result.GetResult<Prisma.$WalletDailyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalletDailies.
     * @param {WalletDailyCreateManyArgs} args - Arguments to create many WalletDailies.
     * @example
     * // Create many WalletDailies
     * const walletDaily = await prisma.walletDaily.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletDailyCreateManyArgs>(args?: SelectSubset<T, WalletDailyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletDailies and returns the data saved in the database.
     * @param {WalletDailyCreateManyAndReturnArgs} args - Arguments to create many WalletDailies.
     * @example
     * // Create many WalletDailies
     * const walletDaily = await prisma.walletDaily.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletDailies and only return the `id`
     * const walletDailyWithIdOnly = await prisma.walletDaily.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletDailyCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletDailyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletDailyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WalletDaily.
     * @param {WalletDailyDeleteArgs} args - Arguments to delete one WalletDaily.
     * @example
     * // Delete one WalletDaily
     * const WalletDaily = await prisma.walletDaily.delete({
     *   where: {
     *     // ... filter to delete one WalletDaily
     *   }
     * })
     * 
     */
    delete<T extends WalletDailyDeleteArgs>(args: SelectSubset<T, WalletDailyDeleteArgs<ExtArgs>>): Prisma__WalletDailyClient<$Result.GetResult<Prisma.$WalletDailyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalletDaily.
     * @param {WalletDailyUpdateArgs} args - Arguments to update one WalletDaily.
     * @example
     * // Update one WalletDaily
     * const walletDaily = await prisma.walletDaily.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletDailyUpdateArgs>(args: SelectSubset<T, WalletDailyUpdateArgs<ExtArgs>>): Prisma__WalletDailyClient<$Result.GetResult<Prisma.$WalletDailyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalletDailies.
     * @param {WalletDailyDeleteManyArgs} args - Arguments to filter WalletDailies to delete.
     * @example
     * // Delete a few WalletDailies
     * const { count } = await prisma.walletDaily.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDailyDeleteManyArgs>(args?: SelectSubset<T, WalletDailyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletDailyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletDailies
     * const walletDaily = await prisma.walletDaily.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletDailyUpdateManyArgs>(args: SelectSubset<T, WalletDailyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletDailies and returns the data updated in the database.
     * @param {WalletDailyUpdateManyAndReturnArgs} args - Arguments to update many WalletDailies.
     * @example
     * // Update many WalletDailies
     * const walletDaily = await prisma.walletDaily.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WalletDailies and only return the `id`
     * const walletDailyWithIdOnly = await prisma.walletDaily.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalletDailyUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletDailyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletDailyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WalletDaily.
     * @param {WalletDailyUpsertArgs} args - Arguments to update or create a WalletDaily.
     * @example
     * // Update or create a WalletDaily
     * const walletDaily = await prisma.walletDaily.upsert({
     *   create: {
     *     // ... data to create a WalletDaily
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletDaily we want to update
     *   }
     * })
     */
    upsert<T extends WalletDailyUpsertArgs>(args: SelectSubset<T, WalletDailyUpsertArgs<ExtArgs>>): Prisma__WalletDailyClient<$Result.GetResult<Prisma.$WalletDailyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalletDailies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletDailyCountArgs} args - Arguments to filter WalletDailies to count.
     * @example
     * // Count the number of WalletDailies
     * const count = await prisma.walletDaily.count({
     *   where: {
     *     // ... the filter for the WalletDailies we want to count
     *   }
     * })
    **/
    count<T extends WalletDailyCountArgs>(
      args?: Subset<T, WalletDailyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletDailyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletDailyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletDailyAggregateArgs>(args: Subset<T, WalletDailyAggregateArgs>): Prisma.PrismaPromise<GetWalletDailyAggregateType<T>>

    /**
     * Group by WalletDaily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletDailyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletDailyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletDailyGroupByArgs['orderBy'] }
        : { orderBy?: WalletDailyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletDailyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletDailyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletDaily model
   */
  readonly fields: WalletDailyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletDaily.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletDailyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WalletDaily model
   */
  interface WalletDailyFieldRefs {
    readonly id: FieldRef<"WalletDaily", 'BigInt'>
    readonly chain: FieldRef<"WalletDaily", 'ChainId'>
    readonly address: FieldRef<"WalletDaily", 'String'>
    readonly day: FieldRef<"WalletDaily", 'DateTime'>
    readonly txCount: FieldRef<"WalletDaily", 'Int'>
    readonly volumeWei: FieldRef<"WalletDaily", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * WalletDaily findUnique
   */
  export type WalletDailyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
    /**
     * Filter, which WalletDaily to fetch.
     */
    where: WalletDailyWhereUniqueInput
  }

  /**
   * WalletDaily findUniqueOrThrow
   */
  export type WalletDailyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
    /**
     * Filter, which WalletDaily to fetch.
     */
    where: WalletDailyWhereUniqueInput
  }

  /**
   * WalletDaily findFirst
   */
  export type WalletDailyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
    /**
     * Filter, which WalletDaily to fetch.
     */
    where?: WalletDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletDailies to fetch.
     */
    orderBy?: WalletDailyOrderByWithRelationInput | WalletDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletDailies.
     */
    cursor?: WalletDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletDailies.
     */
    distinct?: WalletDailyScalarFieldEnum | WalletDailyScalarFieldEnum[]
  }

  /**
   * WalletDaily findFirstOrThrow
   */
  export type WalletDailyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
    /**
     * Filter, which WalletDaily to fetch.
     */
    where?: WalletDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletDailies to fetch.
     */
    orderBy?: WalletDailyOrderByWithRelationInput | WalletDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletDailies.
     */
    cursor?: WalletDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletDailies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletDailies.
     */
    distinct?: WalletDailyScalarFieldEnum | WalletDailyScalarFieldEnum[]
  }

  /**
   * WalletDaily findMany
   */
  export type WalletDailyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
    /**
     * Filter, which WalletDailies to fetch.
     */
    where?: WalletDailyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletDailies to fetch.
     */
    orderBy?: WalletDailyOrderByWithRelationInput | WalletDailyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletDailies.
     */
    cursor?: WalletDailyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletDailies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletDailies.
     */
    skip?: number
    distinct?: WalletDailyScalarFieldEnum | WalletDailyScalarFieldEnum[]
  }

  /**
   * WalletDaily create
   */
  export type WalletDailyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
    /**
     * The data needed to create a WalletDaily.
     */
    data: XOR<WalletDailyCreateInput, WalletDailyUncheckedCreateInput>
  }

  /**
   * WalletDaily createMany
   */
  export type WalletDailyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletDailies.
     */
    data: WalletDailyCreateManyInput | WalletDailyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletDaily createManyAndReturn
   */
  export type WalletDailyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
    /**
     * The data used to create many WalletDailies.
     */
    data: WalletDailyCreateManyInput | WalletDailyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletDaily update
   */
  export type WalletDailyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
    /**
     * The data needed to update a WalletDaily.
     */
    data: XOR<WalletDailyUpdateInput, WalletDailyUncheckedUpdateInput>
    /**
     * Choose, which WalletDaily to update.
     */
    where: WalletDailyWhereUniqueInput
  }

  /**
   * WalletDaily updateMany
   */
  export type WalletDailyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletDailies.
     */
    data: XOR<WalletDailyUpdateManyMutationInput, WalletDailyUncheckedUpdateManyInput>
    /**
     * Filter which WalletDailies to update
     */
    where?: WalletDailyWhereInput
    /**
     * Limit how many WalletDailies to update.
     */
    limit?: number
  }

  /**
   * WalletDaily updateManyAndReturn
   */
  export type WalletDailyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
    /**
     * The data used to update WalletDailies.
     */
    data: XOR<WalletDailyUpdateManyMutationInput, WalletDailyUncheckedUpdateManyInput>
    /**
     * Filter which WalletDailies to update
     */
    where?: WalletDailyWhereInput
    /**
     * Limit how many WalletDailies to update.
     */
    limit?: number
  }

  /**
   * WalletDaily upsert
   */
  export type WalletDailyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
    /**
     * The filter to search for the WalletDaily to update in case it exists.
     */
    where: WalletDailyWhereUniqueInput
    /**
     * In case the WalletDaily found by the `where` argument doesn't exist, create a new WalletDaily with this data.
     */
    create: XOR<WalletDailyCreateInput, WalletDailyUncheckedCreateInput>
    /**
     * In case the WalletDaily was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletDailyUpdateInput, WalletDailyUncheckedUpdateInput>
  }

  /**
   * WalletDaily delete
   */
  export type WalletDailyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
    /**
     * Filter which WalletDaily to delete.
     */
    where: WalletDailyWhereUniqueInput
  }

  /**
   * WalletDaily deleteMany
   */
  export type WalletDailyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletDailies to delete
     */
    where?: WalletDailyWhereInput
    /**
     * Limit how many WalletDailies to delete.
     */
    limit?: number
  }

  /**
   * WalletDaily without action
   */
  export type WalletDailyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletDaily
     */
    select?: WalletDailySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletDaily
     */
    omit?: WalletDailyOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BlockScalarFieldEnum: {
    id: 'id',
    chain: 'chain',
    hash: 'hash',
    parentHash: 'parentHash',
    timestamp: 'timestamp',
    processedAt: 'processedAt'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    hash: 'hash',
    blockId: 'blockId',
    chain: 'chain',
    from: 'from',
    to: 'to',
    valueWei: 'valueWei',
    success: 'success',
    idx: 'idx',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TokenTransferScalarFieldEnum: {
    id: 'id',
    chain: 'chain',
    blockId: 'blockId',
    txHash: 'txHash',
    logIdx: 'logIdx',
    token: 'token',
    from: 'from',
    to: 'to',
    amountRaw: 'amountRaw',
    createdAt: 'createdAt'
  };

  export type TokenTransferScalarFieldEnum = (typeof TokenTransferScalarFieldEnum)[keyof typeof TokenTransferScalarFieldEnum]


  export const WalletDailyScalarFieldEnum: {
    id: 'id',
    chain: 'chain',
    address: 'address',
    day: 'day',
    txCount: 'txCount',
    volumeWei: 'volumeWei'
  };

  export type WalletDailyScalarFieldEnum = (typeof WalletDailyScalarFieldEnum)[keyof typeof WalletDailyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'ChainId'
   */
  export type EnumChainIdFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChainId'>
    


  /**
   * Reference to a field of type 'ChainId[]'
   */
  export type ListEnumChainIdFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChainId[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    id?: BigIntFilter<"Block"> | bigint | number
    chain?: EnumChainIdFilter<"Block"> | $Enums.ChainId
    hash?: StringFilter<"Block"> | string
    parentHash?: StringFilter<"Block"> | string
    timestamp?: DateTimeFilter<"Block"> | Date | string
    processedAt?: DateTimeFilter<"Block"> | Date | string
  }

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder
    chain?: SortOrder
    hash?: SortOrder
    parentHash?: SortOrder
    timestamp?: SortOrder
    processedAt?: SortOrder
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    hash?: string
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    chain?: EnumChainIdFilter<"Block"> | $Enums.ChainId
    parentHash?: StringFilter<"Block"> | string
    timestamp?: DateTimeFilter<"Block"> | Date | string
    processedAt?: DateTimeFilter<"Block"> | Date | string
  }, "id" | "hash">

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder
    chain?: SortOrder
    hash?: SortOrder
    parentHash?: SortOrder
    timestamp?: SortOrder
    processedAt?: SortOrder
    _count?: BlockCountOrderByAggregateInput
    _avg?: BlockAvgOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
    _sum?: BlockSumOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Block"> | bigint | number
    chain?: EnumChainIdWithAggregatesFilter<"Block"> | $Enums.ChainId
    hash?: StringWithAggregatesFilter<"Block"> | string
    parentHash?: StringWithAggregatesFilter<"Block"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Block"> | Date | string
    processedAt?: DateTimeWithAggregatesFilter<"Block"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    hash?: StringFilter<"Transaction"> | string
    blockId?: BigIntFilter<"Transaction"> | bigint | number
    chain?: EnumChainIdFilter<"Transaction"> | $Enums.ChainId
    from?: StringFilter<"Transaction"> | string
    to?: StringNullableFilter<"Transaction"> | string | null
    valueWei?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    success?: BoolFilter<"Transaction"> | boolean
    idx?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type TransactionOrderByWithRelationInput = {
    hash?: SortOrder
    blockId?: SortOrder
    chain?: SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    valueWei?: SortOrder
    success?: SortOrder
    idx?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    hash?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    blockId?: BigIntFilter<"Transaction"> | bigint | number
    chain?: EnumChainIdFilter<"Transaction"> | $Enums.ChainId
    from?: StringFilter<"Transaction"> | string
    to?: StringNullableFilter<"Transaction"> | string | null
    valueWei?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    success?: BoolFilter<"Transaction"> | boolean
    idx?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }, "hash">

  export type TransactionOrderByWithAggregationInput = {
    hash?: SortOrder
    blockId?: SortOrder
    chain?: SortOrder
    from?: SortOrder
    to?: SortOrderInput | SortOrder
    valueWei?: SortOrder
    success?: SortOrder
    idx?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    hash?: StringWithAggregatesFilter<"Transaction"> | string
    blockId?: BigIntWithAggregatesFilter<"Transaction"> | bigint | number
    chain?: EnumChainIdWithAggregatesFilter<"Transaction"> | $Enums.ChainId
    from?: StringWithAggregatesFilter<"Transaction"> | string
    to?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    valueWei?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    success?: BoolWithAggregatesFilter<"Transaction"> | boolean
    idx?: IntWithAggregatesFilter<"Transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type TokenTransferWhereInput = {
    AND?: TokenTransferWhereInput | TokenTransferWhereInput[]
    OR?: TokenTransferWhereInput[]
    NOT?: TokenTransferWhereInput | TokenTransferWhereInput[]
    id?: BigIntFilter<"TokenTransfer"> | bigint | number
    chain?: EnumChainIdFilter<"TokenTransfer"> | $Enums.ChainId
    blockId?: BigIntFilter<"TokenTransfer"> | bigint | number
    txHash?: StringFilter<"TokenTransfer"> | string
    logIdx?: IntFilter<"TokenTransfer"> | number
    token?: StringFilter<"TokenTransfer"> | string
    from?: StringFilter<"TokenTransfer"> | string
    to?: StringFilter<"TokenTransfer"> | string
    amountRaw?: DecimalFilter<"TokenTransfer"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"TokenTransfer"> | Date | string
  }

  export type TokenTransferOrderByWithRelationInput = {
    id?: SortOrder
    chain?: SortOrder
    blockId?: SortOrder
    txHash?: SortOrder
    logIdx?: SortOrder
    token?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amountRaw?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    txHash_logIdx?: TokenTransferTxHashLogIdxCompoundUniqueInput
    AND?: TokenTransferWhereInput | TokenTransferWhereInput[]
    OR?: TokenTransferWhereInput[]
    NOT?: TokenTransferWhereInput | TokenTransferWhereInput[]
    chain?: EnumChainIdFilter<"TokenTransfer"> | $Enums.ChainId
    blockId?: BigIntFilter<"TokenTransfer"> | bigint | number
    txHash?: StringFilter<"TokenTransfer"> | string
    logIdx?: IntFilter<"TokenTransfer"> | number
    token?: StringFilter<"TokenTransfer"> | string
    from?: StringFilter<"TokenTransfer"> | string
    to?: StringFilter<"TokenTransfer"> | string
    amountRaw?: DecimalFilter<"TokenTransfer"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"TokenTransfer"> | Date | string
  }, "id" | "txHash_logIdx">

  export type TokenTransferOrderByWithAggregationInput = {
    id?: SortOrder
    chain?: SortOrder
    blockId?: SortOrder
    txHash?: SortOrder
    logIdx?: SortOrder
    token?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amountRaw?: SortOrder
    createdAt?: SortOrder
    _count?: TokenTransferCountOrderByAggregateInput
    _avg?: TokenTransferAvgOrderByAggregateInput
    _max?: TokenTransferMaxOrderByAggregateInput
    _min?: TokenTransferMinOrderByAggregateInput
    _sum?: TokenTransferSumOrderByAggregateInput
  }

  export type TokenTransferScalarWhereWithAggregatesInput = {
    AND?: TokenTransferScalarWhereWithAggregatesInput | TokenTransferScalarWhereWithAggregatesInput[]
    OR?: TokenTransferScalarWhereWithAggregatesInput[]
    NOT?: TokenTransferScalarWhereWithAggregatesInput | TokenTransferScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"TokenTransfer"> | bigint | number
    chain?: EnumChainIdWithAggregatesFilter<"TokenTransfer"> | $Enums.ChainId
    blockId?: BigIntWithAggregatesFilter<"TokenTransfer"> | bigint | number
    txHash?: StringWithAggregatesFilter<"TokenTransfer"> | string
    logIdx?: IntWithAggregatesFilter<"TokenTransfer"> | number
    token?: StringWithAggregatesFilter<"TokenTransfer"> | string
    from?: StringWithAggregatesFilter<"TokenTransfer"> | string
    to?: StringWithAggregatesFilter<"TokenTransfer"> | string
    amountRaw?: DecimalWithAggregatesFilter<"TokenTransfer"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"TokenTransfer"> | Date | string
  }

  export type WalletDailyWhereInput = {
    AND?: WalletDailyWhereInput | WalletDailyWhereInput[]
    OR?: WalletDailyWhereInput[]
    NOT?: WalletDailyWhereInput | WalletDailyWhereInput[]
    id?: BigIntFilter<"WalletDaily"> | bigint | number
    chain?: EnumChainIdFilter<"WalletDaily"> | $Enums.ChainId
    address?: StringFilter<"WalletDaily"> | string
    day?: DateTimeFilter<"WalletDaily"> | Date | string
    txCount?: IntFilter<"WalletDaily"> | number
    volumeWei?: DecimalFilter<"WalletDaily"> | Decimal | DecimalJsLike | number | string
  }

  export type WalletDailyOrderByWithRelationInput = {
    id?: SortOrder
    chain?: SortOrder
    address?: SortOrder
    day?: SortOrder
    txCount?: SortOrder
    volumeWei?: SortOrder
  }

  export type WalletDailyWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    chain_address_day?: WalletDailyChainAddressDayCompoundUniqueInput
    AND?: WalletDailyWhereInput | WalletDailyWhereInput[]
    OR?: WalletDailyWhereInput[]
    NOT?: WalletDailyWhereInput | WalletDailyWhereInput[]
    chain?: EnumChainIdFilter<"WalletDaily"> | $Enums.ChainId
    address?: StringFilter<"WalletDaily"> | string
    day?: DateTimeFilter<"WalletDaily"> | Date | string
    txCount?: IntFilter<"WalletDaily"> | number
    volumeWei?: DecimalFilter<"WalletDaily"> | Decimal | DecimalJsLike | number | string
  }, "id" | "chain_address_day">

  export type WalletDailyOrderByWithAggregationInput = {
    id?: SortOrder
    chain?: SortOrder
    address?: SortOrder
    day?: SortOrder
    txCount?: SortOrder
    volumeWei?: SortOrder
    _count?: WalletDailyCountOrderByAggregateInput
    _avg?: WalletDailyAvgOrderByAggregateInput
    _max?: WalletDailyMaxOrderByAggregateInput
    _min?: WalletDailyMinOrderByAggregateInput
    _sum?: WalletDailySumOrderByAggregateInput
  }

  export type WalletDailyScalarWhereWithAggregatesInput = {
    AND?: WalletDailyScalarWhereWithAggregatesInput | WalletDailyScalarWhereWithAggregatesInput[]
    OR?: WalletDailyScalarWhereWithAggregatesInput[]
    NOT?: WalletDailyScalarWhereWithAggregatesInput | WalletDailyScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"WalletDaily"> | bigint | number
    chain?: EnumChainIdWithAggregatesFilter<"WalletDaily"> | $Enums.ChainId
    address?: StringWithAggregatesFilter<"WalletDaily"> | string
    day?: DateTimeWithAggregatesFilter<"WalletDaily"> | Date | string
    txCount?: IntWithAggregatesFilter<"WalletDaily"> | number
    volumeWei?: DecimalWithAggregatesFilter<"WalletDaily"> | Decimal | DecimalJsLike | number | string
  }

  export type BlockCreateInput = {
    id: bigint | number
    chain: $Enums.ChainId
    hash: string
    parentHash: string
    timestamp: Date | string
    processedAt?: Date | string
  }

  export type BlockUncheckedCreateInput = {
    id: bigint | number
    chain: $Enums.ChainId
    hash: string
    parentHash: string
    timestamp: Date | string
    processedAt?: Date | string
  }

  export type BlockUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    hash?: StringFieldUpdateOperationsInput | string
    parentHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    hash?: StringFieldUpdateOperationsInput | string
    parentHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockCreateManyInput = {
    id: bigint | number
    chain: $Enums.ChainId
    hash: string
    parentHash: string
    timestamp: Date | string
    processedAt?: Date | string
  }

  export type BlockUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    hash?: StringFieldUpdateOperationsInput | string
    parentHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    hash?: StringFieldUpdateOperationsInput | string
    parentHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    hash: string
    blockId: bigint | number
    chain: $Enums.ChainId
    from: string
    to?: string | null
    valueWei: Decimal | DecimalJsLike | number | string
    success: boolean
    idx: number
    createdAt?: Date | string
  }

  export type TransactionUncheckedCreateInput = {
    hash: string
    blockId: bigint | number
    chain: $Enums.ChainId
    from: string
    to?: string | null
    valueWei: Decimal | DecimalJsLike | number | string
    success: boolean
    idx: number
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    hash?: StringFieldUpdateOperationsInput | string
    blockId?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    from?: StringFieldUpdateOperationsInput | string
    to?: NullableStringFieldUpdateOperationsInput | string | null
    valueWei?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    success?: BoolFieldUpdateOperationsInput | boolean
    idx?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateInput = {
    hash?: StringFieldUpdateOperationsInput | string
    blockId?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    from?: StringFieldUpdateOperationsInput | string
    to?: NullableStringFieldUpdateOperationsInput | string | null
    valueWei?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    success?: BoolFieldUpdateOperationsInput | boolean
    idx?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    hash: string
    blockId: bigint | number
    chain: $Enums.ChainId
    from: string
    to?: string | null
    valueWei: Decimal | DecimalJsLike | number | string
    success: boolean
    idx: number
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    hash?: StringFieldUpdateOperationsInput | string
    blockId?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    from?: StringFieldUpdateOperationsInput | string
    to?: NullableStringFieldUpdateOperationsInput | string | null
    valueWei?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    success?: BoolFieldUpdateOperationsInput | boolean
    idx?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    hash?: StringFieldUpdateOperationsInput | string
    blockId?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    from?: StringFieldUpdateOperationsInput | string
    to?: NullableStringFieldUpdateOperationsInput | string | null
    valueWei?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    success?: BoolFieldUpdateOperationsInput | boolean
    idx?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenTransferCreateInput = {
    id?: bigint | number
    chain: $Enums.ChainId
    blockId: bigint | number
    txHash: string
    logIdx: number
    token: string
    from: string
    to: string
    amountRaw: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type TokenTransferUncheckedCreateInput = {
    id?: bigint | number
    chain: $Enums.ChainId
    blockId: bigint | number
    txHash: string
    logIdx: number
    token: string
    from: string
    to: string
    amountRaw: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type TokenTransferUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    blockId?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIdx?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    amountRaw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenTransferUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    blockId?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIdx?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    amountRaw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenTransferCreateManyInput = {
    id?: bigint | number
    chain: $Enums.ChainId
    blockId: bigint | number
    txHash: string
    logIdx: number
    token: string
    from: string
    to: string
    amountRaw: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type TokenTransferUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    blockId?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIdx?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    amountRaw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenTransferUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    blockId?: BigIntFieldUpdateOperationsInput | bigint | number
    txHash?: StringFieldUpdateOperationsInput | string
    logIdx?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    amountRaw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletDailyCreateInput = {
    id?: bigint | number
    chain: $Enums.ChainId
    address: string
    day: Date | string
    txCount?: number
    volumeWei?: Decimal | DecimalJsLike | number | string
  }

  export type WalletDailyUncheckedCreateInput = {
    id?: bigint | number
    chain: $Enums.ChainId
    address: string
    day: Date | string
    txCount?: number
    volumeWei?: Decimal | DecimalJsLike | number | string
  }

  export type WalletDailyUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    address?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    txCount?: IntFieldUpdateOperationsInput | number
    volumeWei?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type WalletDailyUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    address?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    txCount?: IntFieldUpdateOperationsInput | number
    volumeWei?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type WalletDailyCreateManyInput = {
    id?: bigint | number
    chain: $Enums.ChainId
    address: string
    day: Date | string
    txCount?: number
    volumeWei?: Decimal | DecimalJsLike | number | string
  }

  export type WalletDailyUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    address?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    txCount?: IntFieldUpdateOperationsInput | number
    volumeWei?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type WalletDailyUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chain?: EnumChainIdFieldUpdateOperationsInput | $Enums.ChainId
    address?: StringFieldUpdateOperationsInput | string
    day?: DateTimeFieldUpdateOperationsInput | Date | string
    txCount?: IntFieldUpdateOperationsInput | number
    volumeWei?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumChainIdFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainId | EnumChainIdFieldRefInput<$PrismaModel>
    in?: $Enums.ChainId[] | ListEnumChainIdFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainId[] | ListEnumChainIdFieldRefInput<$PrismaModel>
    not?: NestedEnumChainIdFilter<$PrismaModel> | $Enums.ChainId
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    hash?: SortOrder
    parentHash?: SortOrder
    timestamp?: SortOrder
    processedAt?: SortOrder
  }

  export type BlockAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    hash?: SortOrder
    parentHash?: SortOrder
    timestamp?: SortOrder
    processedAt?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    hash?: SortOrder
    parentHash?: SortOrder
    timestamp?: SortOrder
    processedAt?: SortOrder
  }

  export type BlockSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumChainIdWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainId | EnumChainIdFieldRefInput<$PrismaModel>
    in?: $Enums.ChainId[] | ListEnumChainIdFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainId[] | ListEnumChainIdFieldRefInput<$PrismaModel>
    not?: NestedEnumChainIdWithAggregatesFilter<$PrismaModel> | $Enums.ChainId
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainIdFilter<$PrismaModel>
    _max?: NestedEnumChainIdFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    hash?: SortOrder
    blockId?: SortOrder
    chain?: SortOrder
    from?: SortOrder
    to?: SortOrder
    valueWei?: SortOrder
    success?: SortOrder
    idx?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    blockId?: SortOrder
    valueWei?: SortOrder
    idx?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    hash?: SortOrder
    blockId?: SortOrder
    chain?: SortOrder
    from?: SortOrder
    to?: SortOrder
    valueWei?: SortOrder
    success?: SortOrder
    idx?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    hash?: SortOrder
    blockId?: SortOrder
    chain?: SortOrder
    from?: SortOrder
    to?: SortOrder
    valueWei?: SortOrder
    success?: SortOrder
    idx?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    blockId?: SortOrder
    valueWei?: SortOrder
    idx?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TokenTransferTxHashLogIdxCompoundUniqueInput = {
    txHash: string
    logIdx: number
  }

  export type TokenTransferCountOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    blockId?: SortOrder
    txHash?: SortOrder
    logIdx?: SortOrder
    token?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amountRaw?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenTransferAvgOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    logIdx?: SortOrder
    amountRaw?: SortOrder
  }

  export type TokenTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    blockId?: SortOrder
    txHash?: SortOrder
    logIdx?: SortOrder
    token?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amountRaw?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenTransferMinOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    blockId?: SortOrder
    txHash?: SortOrder
    logIdx?: SortOrder
    token?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amountRaw?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenTransferSumOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    logIdx?: SortOrder
    amountRaw?: SortOrder
  }

  export type WalletDailyChainAddressDayCompoundUniqueInput = {
    chain: $Enums.ChainId
    address: string
    day: Date | string
  }

  export type WalletDailyCountOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    address?: SortOrder
    day?: SortOrder
    txCount?: SortOrder
    volumeWei?: SortOrder
  }

  export type WalletDailyAvgOrderByAggregateInput = {
    id?: SortOrder
    txCount?: SortOrder
    volumeWei?: SortOrder
  }

  export type WalletDailyMaxOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    address?: SortOrder
    day?: SortOrder
    txCount?: SortOrder
    volumeWei?: SortOrder
  }

  export type WalletDailyMinOrderByAggregateInput = {
    id?: SortOrder
    chain?: SortOrder
    address?: SortOrder
    day?: SortOrder
    txCount?: SortOrder
    volumeWei?: SortOrder
  }

  export type WalletDailySumOrderByAggregateInput = {
    id?: SortOrder
    txCount?: SortOrder
    volumeWei?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumChainIdFieldUpdateOperationsInput = {
    set?: $Enums.ChainId
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumChainIdFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainId | EnumChainIdFieldRefInput<$PrismaModel>
    in?: $Enums.ChainId[] | ListEnumChainIdFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainId[] | ListEnumChainIdFieldRefInput<$PrismaModel>
    not?: NestedEnumChainIdFilter<$PrismaModel> | $Enums.ChainId
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumChainIdWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChainId | EnumChainIdFieldRefInput<$PrismaModel>
    in?: $Enums.ChainId[] | ListEnumChainIdFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChainId[] | ListEnumChainIdFieldRefInput<$PrismaModel>
    not?: NestedEnumChainIdWithAggregatesFilter<$PrismaModel> | $Enums.ChainId
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChainIdFilter<$PrismaModel>
    _max?: NestedEnumChainIdFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}