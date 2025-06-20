
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
 * Model Coleta
 * 
 */
export type Coleta = $Result.DefaultSelection<Prisma.$ColetaPayload>
/**
 * Model ColetaAgendada
 * 
 */
export type ColetaAgendada = $Result.DefaultSelection<Prisma.$ColetaAgendadaPayload>
/**
 * Model Cooperativa
 * 
 */
export type Cooperativa = $Result.DefaultSelection<Prisma.$CooperativaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Coletas
 * const coletas = await prisma.coleta.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Coletas
   * const coletas = await prisma.coleta.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.coleta`: Exposes CRUD operations for the **Coleta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coletas
    * const coletas = await prisma.coleta.findMany()
    * ```
    */
  get coleta(): Prisma.ColetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coletaAgendada`: Exposes CRUD operations for the **ColetaAgendada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ColetaAgendadas
    * const coletaAgendadas = await prisma.coletaAgendada.findMany()
    * ```
    */
  get coletaAgendada(): Prisma.ColetaAgendadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cooperativa`: Exposes CRUD operations for the **Cooperativa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cooperativas
    * const cooperativas = await prisma.cooperativa.findMany()
    * ```
    */
  get cooperativa(): Prisma.CooperativaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    Coleta: 'Coleta',
    ColetaAgendada: 'ColetaAgendada',
    Cooperativa: 'Cooperativa'
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
      modelProps: "coleta" | "coletaAgendada" | "cooperativa"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Coleta: {
        payload: Prisma.$ColetaPayload<ExtArgs>
        fields: Prisma.ColetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaPayload>
          }
          findFirst: {
            args: Prisma.ColetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaPayload>
          }
          findMany: {
            args: Prisma.ColetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaPayload>[]
          }
          create: {
            args: Prisma.ColetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaPayload>
          }
          createMany: {
            args: Prisma.ColetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaPayload>[]
          }
          delete: {
            args: Prisma.ColetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaPayload>
          }
          update: {
            args: Prisma.ColetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaPayload>
          }
          deleteMany: {
            args: Prisma.ColetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaPayload>[]
          }
          upsert: {
            args: Prisma.ColetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaPayload>
          }
          aggregate: {
            args: Prisma.ColetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColeta>
          }
          groupBy: {
            args: Prisma.ColetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColetaCountArgs<ExtArgs>
            result: $Utils.Optional<ColetaCountAggregateOutputType> | number
          }
        }
      }
      ColetaAgendada: {
        payload: Prisma.$ColetaAgendadaPayload<ExtArgs>
        fields: Prisma.ColetaAgendadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColetaAgendadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaAgendadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColetaAgendadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaAgendadaPayload>
          }
          findFirst: {
            args: Prisma.ColetaAgendadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaAgendadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColetaAgendadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaAgendadaPayload>
          }
          findMany: {
            args: Prisma.ColetaAgendadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaAgendadaPayload>[]
          }
          create: {
            args: Prisma.ColetaAgendadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaAgendadaPayload>
          }
          createMany: {
            args: Prisma.ColetaAgendadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColetaAgendadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaAgendadaPayload>[]
          }
          delete: {
            args: Prisma.ColetaAgendadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaAgendadaPayload>
          }
          update: {
            args: Prisma.ColetaAgendadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaAgendadaPayload>
          }
          deleteMany: {
            args: Prisma.ColetaAgendadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColetaAgendadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColetaAgendadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaAgendadaPayload>[]
          }
          upsert: {
            args: Prisma.ColetaAgendadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColetaAgendadaPayload>
          }
          aggregate: {
            args: Prisma.ColetaAgendadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColetaAgendada>
          }
          groupBy: {
            args: Prisma.ColetaAgendadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColetaAgendadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColetaAgendadaCountArgs<ExtArgs>
            result: $Utils.Optional<ColetaAgendadaCountAggregateOutputType> | number
          }
        }
      }
      Cooperativa: {
        payload: Prisma.$CooperativaPayload<ExtArgs>
        fields: Prisma.CooperativaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CooperativaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CooperativaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          findFirst: {
            args: Prisma.CooperativaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CooperativaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          findMany: {
            args: Prisma.CooperativaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>[]
          }
          create: {
            args: Prisma.CooperativaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          createMany: {
            args: Prisma.CooperativaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CooperativaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>[]
          }
          delete: {
            args: Prisma.CooperativaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          update: {
            args: Prisma.CooperativaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          deleteMany: {
            args: Prisma.CooperativaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CooperativaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CooperativaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>[]
          }
          upsert: {
            args: Prisma.CooperativaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CooperativaPayload>
          }
          aggregate: {
            args: Prisma.CooperativaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCooperativa>
          }
          groupBy: {
            args: Prisma.CooperativaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CooperativaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CooperativaCountArgs<ExtArgs>
            result: $Utils.Optional<CooperativaCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    coleta?: ColetaOmit
    coletaAgendada?: ColetaAgendadaOmit
    cooperativa?: CooperativaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Model Coleta
   */

  export type AggregateColeta = {
    _count: ColetaCountAggregateOutputType | null
    _avg: ColetaAvgAggregateOutputType | null
    _sum: ColetaSumAggregateOutputType | null
    _min: ColetaMinAggregateOutputType | null
    _max: ColetaMaxAggregateOutputType | null
  }

  export type ColetaAvgAggregateOutputType = {
    id: number | null
    peso: number | null
  }

  export type ColetaSumAggregateOutputType = {
    id: number | null
    peso: number | null
  }

  export type ColetaMinAggregateOutputType = {
    id: number | null
    pontoColeta: string | null
    peso: number | null
    unidade: string | null
    observacoes: string | null
    createdAt: Date | null
  }

  export type ColetaMaxAggregateOutputType = {
    id: number | null
    pontoColeta: string | null
    peso: number | null
    unidade: string | null
    observacoes: string | null
    createdAt: Date | null
  }

  export type ColetaCountAggregateOutputType = {
    id: number
    pontoColeta: number
    peso: number
    unidade: number
    observacoes: number
    localizacao: number
    createdAt: number
    _all: number
  }


  export type ColetaAvgAggregateInputType = {
    id?: true
    peso?: true
  }

  export type ColetaSumAggregateInputType = {
    id?: true
    peso?: true
  }

  export type ColetaMinAggregateInputType = {
    id?: true
    pontoColeta?: true
    peso?: true
    unidade?: true
    observacoes?: true
    createdAt?: true
  }

  export type ColetaMaxAggregateInputType = {
    id?: true
    pontoColeta?: true
    peso?: true
    unidade?: true
    observacoes?: true
    createdAt?: true
  }

  export type ColetaCountAggregateInputType = {
    id?: true
    pontoColeta?: true
    peso?: true
    unidade?: true
    observacoes?: true
    localizacao?: true
    createdAt?: true
    _all?: true
  }

  export type ColetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coleta to aggregate.
     */
    where?: ColetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coletas to fetch.
     */
    orderBy?: ColetaOrderByWithRelationInput | ColetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coletas
    **/
    _count?: true | ColetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColetaMaxAggregateInputType
  }

  export type GetColetaAggregateType<T extends ColetaAggregateArgs> = {
        [P in keyof T & keyof AggregateColeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColeta[P]>
      : GetScalarType<T[P], AggregateColeta[P]>
  }




  export type ColetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColetaWhereInput
    orderBy?: ColetaOrderByWithAggregationInput | ColetaOrderByWithAggregationInput[]
    by: ColetaScalarFieldEnum[] | ColetaScalarFieldEnum
    having?: ColetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColetaCountAggregateInputType | true
    _avg?: ColetaAvgAggregateInputType
    _sum?: ColetaSumAggregateInputType
    _min?: ColetaMinAggregateInputType
    _max?: ColetaMaxAggregateInputType
  }

  export type ColetaGroupByOutputType = {
    id: number
    pontoColeta: string
    peso: number
    unidade: string
    observacoes: string | null
    localizacao: JsonValue | null
    createdAt: Date
    _count: ColetaCountAggregateOutputType | null
    _avg: ColetaAvgAggregateOutputType | null
    _sum: ColetaSumAggregateOutputType | null
    _min: ColetaMinAggregateOutputType | null
    _max: ColetaMaxAggregateOutputType | null
  }

  type GetColetaGroupByPayload<T extends ColetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColetaGroupByOutputType[P]>
            : GetScalarType<T[P], ColetaGroupByOutputType[P]>
        }
      >
    >


  export type ColetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pontoColeta?: boolean
    peso?: boolean
    unidade?: boolean
    observacoes?: boolean
    localizacao?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["coleta"]>

  export type ColetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pontoColeta?: boolean
    peso?: boolean
    unidade?: boolean
    observacoes?: boolean
    localizacao?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["coleta"]>

  export type ColetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pontoColeta?: boolean
    peso?: boolean
    unidade?: boolean
    observacoes?: boolean
    localizacao?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["coleta"]>

  export type ColetaSelectScalar = {
    id?: boolean
    pontoColeta?: boolean
    peso?: boolean
    unidade?: boolean
    observacoes?: boolean
    localizacao?: boolean
    createdAt?: boolean
  }

  export type ColetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pontoColeta" | "peso" | "unidade" | "observacoes" | "localizacao" | "createdAt", ExtArgs["result"]["coleta"]>

  export type $ColetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coleta"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pontoColeta: string
      peso: number
      unidade: string
      observacoes: string | null
      localizacao: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["coleta"]>
    composites: {}
  }

  type ColetaGetPayload<S extends boolean | null | undefined | ColetaDefaultArgs> = $Result.GetResult<Prisma.$ColetaPayload, S>

  type ColetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColetaCountAggregateInputType | true
    }

  export interface ColetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coleta'], meta: { name: 'Coleta' } }
    /**
     * Find zero or one Coleta that matches the filter.
     * @param {ColetaFindUniqueArgs} args - Arguments to find a Coleta
     * @example
     * // Get one Coleta
     * const coleta = await prisma.coleta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColetaFindUniqueArgs>(args: SelectSubset<T, ColetaFindUniqueArgs<ExtArgs>>): Prisma__ColetaClient<$Result.GetResult<Prisma.$ColetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coleta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColetaFindUniqueOrThrowArgs} args - Arguments to find a Coleta
     * @example
     * // Get one Coleta
     * const coleta = await prisma.coleta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColetaFindUniqueOrThrowArgs>(args: SelectSubset<T, ColetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColetaClient<$Result.GetResult<Prisma.$ColetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coleta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaFindFirstArgs} args - Arguments to find a Coleta
     * @example
     * // Get one Coleta
     * const coleta = await prisma.coleta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColetaFindFirstArgs>(args?: SelectSubset<T, ColetaFindFirstArgs<ExtArgs>>): Prisma__ColetaClient<$Result.GetResult<Prisma.$ColetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coleta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaFindFirstOrThrowArgs} args - Arguments to find a Coleta
     * @example
     * // Get one Coleta
     * const coleta = await prisma.coleta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColetaFindFirstOrThrowArgs>(args?: SelectSubset<T, ColetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColetaClient<$Result.GetResult<Prisma.$ColetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coletas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coletas
     * const coletas = await prisma.coleta.findMany()
     * 
     * // Get first 10 Coletas
     * const coletas = await prisma.coleta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coletaWithIdOnly = await prisma.coleta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColetaFindManyArgs>(args?: SelectSubset<T, ColetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coleta.
     * @param {ColetaCreateArgs} args - Arguments to create a Coleta.
     * @example
     * // Create one Coleta
     * const Coleta = await prisma.coleta.create({
     *   data: {
     *     // ... data to create a Coleta
     *   }
     * })
     * 
     */
    create<T extends ColetaCreateArgs>(args: SelectSubset<T, ColetaCreateArgs<ExtArgs>>): Prisma__ColetaClient<$Result.GetResult<Prisma.$ColetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coletas.
     * @param {ColetaCreateManyArgs} args - Arguments to create many Coletas.
     * @example
     * // Create many Coletas
     * const coleta = await prisma.coleta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColetaCreateManyArgs>(args?: SelectSubset<T, ColetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coletas and returns the data saved in the database.
     * @param {ColetaCreateManyAndReturnArgs} args - Arguments to create many Coletas.
     * @example
     * // Create many Coletas
     * const coleta = await prisma.coleta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coletas and only return the `id`
     * const coletaWithIdOnly = await prisma.coleta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColetaCreateManyAndReturnArgs>(args?: SelectSubset<T, ColetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coleta.
     * @param {ColetaDeleteArgs} args - Arguments to delete one Coleta.
     * @example
     * // Delete one Coleta
     * const Coleta = await prisma.coleta.delete({
     *   where: {
     *     // ... filter to delete one Coleta
     *   }
     * })
     * 
     */
    delete<T extends ColetaDeleteArgs>(args: SelectSubset<T, ColetaDeleteArgs<ExtArgs>>): Prisma__ColetaClient<$Result.GetResult<Prisma.$ColetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coleta.
     * @param {ColetaUpdateArgs} args - Arguments to update one Coleta.
     * @example
     * // Update one Coleta
     * const coleta = await prisma.coleta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColetaUpdateArgs>(args: SelectSubset<T, ColetaUpdateArgs<ExtArgs>>): Prisma__ColetaClient<$Result.GetResult<Prisma.$ColetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coletas.
     * @param {ColetaDeleteManyArgs} args - Arguments to filter Coletas to delete.
     * @example
     * // Delete a few Coletas
     * const { count } = await prisma.coleta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColetaDeleteManyArgs>(args?: SelectSubset<T, ColetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coletas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coletas
     * const coleta = await prisma.coleta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColetaUpdateManyArgs>(args: SelectSubset<T, ColetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coletas and returns the data updated in the database.
     * @param {ColetaUpdateManyAndReturnArgs} args - Arguments to update many Coletas.
     * @example
     * // Update many Coletas
     * const coleta = await prisma.coleta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coletas and only return the `id`
     * const coletaWithIdOnly = await prisma.coleta.updateManyAndReturn({
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
    updateManyAndReturn<T extends ColetaUpdateManyAndReturnArgs>(args: SelectSubset<T, ColetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coleta.
     * @param {ColetaUpsertArgs} args - Arguments to update or create a Coleta.
     * @example
     * // Update or create a Coleta
     * const coleta = await prisma.coleta.upsert({
     *   create: {
     *     // ... data to create a Coleta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coleta we want to update
     *   }
     * })
     */
    upsert<T extends ColetaUpsertArgs>(args: SelectSubset<T, ColetaUpsertArgs<ExtArgs>>): Prisma__ColetaClient<$Result.GetResult<Prisma.$ColetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coletas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaCountArgs} args - Arguments to filter Coletas to count.
     * @example
     * // Count the number of Coletas
     * const count = await prisma.coleta.count({
     *   where: {
     *     // ... the filter for the Coletas we want to count
     *   }
     * })
    **/
    count<T extends ColetaCountArgs>(
      args?: Subset<T, ColetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coleta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColetaAggregateArgs>(args: Subset<T, ColetaAggregateArgs>): Prisma.PrismaPromise<GetColetaAggregateType<T>>

    /**
     * Group by Coleta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaGroupByArgs} args - Group by arguments.
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
      T extends ColetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColetaGroupByArgs['orderBy'] }
        : { orderBy?: ColetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coleta model
   */
  readonly fields: ColetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coleta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Coleta model
   */
  interface ColetaFieldRefs {
    readonly id: FieldRef<"Coleta", 'Int'>
    readonly pontoColeta: FieldRef<"Coleta", 'String'>
    readonly peso: FieldRef<"Coleta", 'Float'>
    readonly unidade: FieldRef<"Coleta", 'String'>
    readonly observacoes: FieldRef<"Coleta", 'String'>
    readonly localizacao: FieldRef<"Coleta", 'Json'>
    readonly createdAt: FieldRef<"Coleta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coleta findUnique
   */
  export type ColetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
    /**
     * Filter, which Coleta to fetch.
     */
    where: ColetaWhereUniqueInput
  }

  /**
   * Coleta findUniqueOrThrow
   */
  export type ColetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
    /**
     * Filter, which Coleta to fetch.
     */
    where: ColetaWhereUniqueInput
  }

  /**
   * Coleta findFirst
   */
  export type ColetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
    /**
     * Filter, which Coleta to fetch.
     */
    where?: ColetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coletas to fetch.
     */
    orderBy?: ColetaOrderByWithRelationInput | ColetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coletas.
     */
    cursor?: ColetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coletas.
     */
    distinct?: ColetaScalarFieldEnum | ColetaScalarFieldEnum[]
  }

  /**
   * Coleta findFirstOrThrow
   */
  export type ColetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
    /**
     * Filter, which Coleta to fetch.
     */
    where?: ColetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coletas to fetch.
     */
    orderBy?: ColetaOrderByWithRelationInput | ColetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coletas.
     */
    cursor?: ColetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coletas.
     */
    distinct?: ColetaScalarFieldEnum | ColetaScalarFieldEnum[]
  }

  /**
   * Coleta findMany
   */
  export type ColetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
    /**
     * Filter, which Coletas to fetch.
     */
    where?: ColetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coletas to fetch.
     */
    orderBy?: ColetaOrderByWithRelationInput | ColetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coletas.
     */
    cursor?: ColetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coletas.
     */
    skip?: number
    distinct?: ColetaScalarFieldEnum | ColetaScalarFieldEnum[]
  }

  /**
   * Coleta create
   */
  export type ColetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
    /**
     * The data needed to create a Coleta.
     */
    data: XOR<ColetaCreateInput, ColetaUncheckedCreateInput>
  }

  /**
   * Coleta createMany
   */
  export type ColetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coletas.
     */
    data: ColetaCreateManyInput | ColetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coleta createManyAndReturn
   */
  export type ColetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
    /**
     * The data used to create many Coletas.
     */
    data: ColetaCreateManyInput | ColetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coleta update
   */
  export type ColetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
    /**
     * The data needed to update a Coleta.
     */
    data: XOR<ColetaUpdateInput, ColetaUncheckedUpdateInput>
    /**
     * Choose, which Coleta to update.
     */
    where: ColetaWhereUniqueInput
  }

  /**
   * Coleta updateMany
   */
  export type ColetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coletas.
     */
    data: XOR<ColetaUpdateManyMutationInput, ColetaUncheckedUpdateManyInput>
    /**
     * Filter which Coletas to update
     */
    where?: ColetaWhereInput
    /**
     * Limit how many Coletas to update.
     */
    limit?: number
  }

  /**
   * Coleta updateManyAndReturn
   */
  export type ColetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
    /**
     * The data used to update Coletas.
     */
    data: XOR<ColetaUpdateManyMutationInput, ColetaUncheckedUpdateManyInput>
    /**
     * Filter which Coletas to update
     */
    where?: ColetaWhereInput
    /**
     * Limit how many Coletas to update.
     */
    limit?: number
  }

  /**
   * Coleta upsert
   */
  export type ColetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
    /**
     * The filter to search for the Coleta to update in case it exists.
     */
    where: ColetaWhereUniqueInput
    /**
     * In case the Coleta found by the `where` argument doesn't exist, create a new Coleta with this data.
     */
    create: XOR<ColetaCreateInput, ColetaUncheckedCreateInput>
    /**
     * In case the Coleta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColetaUpdateInput, ColetaUncheckedUpdateInput>
  }

  /**
   * Coleta delete
   */
  export type ColetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
    /**
     * Filter which Coleta to delete.
     */
    where: ColetaWhereUniqueInput
  }

  /**
   * Coleta deleteMany
   */
  export type ColetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coletas to delete
     */
    where?: ColetaWhereInput
    /**
     * Limit how many Coletas to delete.
     */
    limit?: number
  }

  /**
   * Coleta without action
   */
  export type ColetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coleta
     */
    select?: ColetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coleta
     */
    omit?: ColetaOmit<ExtArgs> | null
  }


  /**
   * Model ColetaAgendada
   */

  export type AggregateColetaAgendada = {
    _count: ColetaAgendadaCountAggregateOutputType | null
    _avg: ColetaAgendadaAvgAggregateOutputType | null
    _sum: ColetaAgendadaSumAggregateOutputType | null
    _min: ColetaAgendadaMinAggregateOutputType | null
    _max: ColetaAgendadaMaxAggregateOutputType | null
  }

  export type ColetaAgendadaAvgAggregateOutputType = {
    id: number | null
  }

  export type ColetaAgendadaSumAggregateOutputType = {
    id: number | null
  }

  export type ColetaAgendadaMinAggregateOutputType = {
    id: number | null
    pontoColeta: string | null
    endereco: string | null
    dataHora: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type ColetaAgendadaMaxAggregateOutputType = {
    id: number | null
    pontoColeta: string | null
    endereco: string | null
    dataHora: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type ColetaAgendadaCountAggregateOutputType = {
    id: number
    pontoColeta: number
    endereco: number
    dataHora: number
    status: number
    createdAt: number
    _all: number
  }


  export type ColetaAgendadaAvgAggregateInputType = {
    id?: true
  }

  export type ColetaAgendadaSumAggregateInputType = {
    id?: true
  }

  export type ColetaAgendadaMinAggregateInputType = {
    id?: true
    pontoColeta?: true
    endereco?: true
    dataHora?: true
    status?: true
    createdAt?: true
  }

  export type ColetaAgendadaMaxAggregateInputType = {
    id?: true
    pontoColeta?: true
    endereco?: true
    dataHora?: true
    status?: true
    createdAt?: true
  }

  export type ColetaAgendadaCountAggregateInputType = {
    id?: true
    pontoColeta?: true
    endereco?: true
    dataHora?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ColetaAgendadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColetaAgendada to aggregate.
     */
    where?: ColetaAgendadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColetaAgendadas to fetch.
     */
    orderBy?: ColetaAgendadaOrderByWithRelationInput | ColetaAgendadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColetaAgendadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColetaAgendadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColetaAgendadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ColetaAgendadas
    **/
    _count?: true | ColetaAgendadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColetaAgendadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColetaAgendadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColetaAgendadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColetaAgendadaMaxAggregateInputType
  }

  export type GetColetaAgendadaAggregateType<T extends ColetaAgendadaAggregateArgs> = {
        [P in keyof T & keyof AggregateColetaAgendada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColetaAgendada[P]>
      : GetScalarType<T[P], AggregateColetaAgendada[P]>
  }




  export type ColetaAgendadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColetaAgendadaWhereInput
    orderBy?: ColetaAgendadaOrderByWithAggregationInput | ColetaAgendadaOrderByWithAggregationInput[]
    by: ColetaAgendadaScalarFieldEnum[] | ColetaAgendadaScalarFieldEnum
    having?: ColetaAgendadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColetaAgendadaCountAggregateInputType | true
    _avg?: ColetaAgendadaAvgAggregateInputType
    _sum?: ColetaAgendadaSumAggregateInputType
    _min?: ColetaAgendadaMinAggregateInputType
    _max?: ColetaAgendadaMaxAggregateInputType
  }

  export type ColetaAgendadaGroupByOutputType = {
    id: number
    pontoColeta: string
    endereco: string
    dataHora: Date
    status: string
    createdAt: Date
    _count: ColetaAgendadaCountAggregateOutputType | null
    _avg: ColetaAgendadaAvgAggregateOutputType | null
    _sum: ColetaAgendadaSumAggregateOutputType | null
    _min: ColetaAgendadaMinAggregateOutputType | null
    _max: ColetaAgendadaMaxAggregateOutputType | null
  }

  type GetColetaAgendadaGroupByPayload<T extends ColetaAgendadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColetaAgendadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColetaAgendadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColetaAgendadaGroupByOutputType[P]>
            : GetScalarType<T[P], ColetaAgendadaGroupByOutputType[P]>
        }
      >
    >


  export type ColetaAgendadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pontoColeta?: boolean
    endereco?: boolean
    dataHora?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["coletaAgendada"]>

  export type ColetaAgendadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pontoColeta?: boolean
    endereco?: boolean
    dataHora?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["coletaAgendada"]>

  export type ColetaAgendadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pontoColeta?: boolean
    endereco?: boolean
    dataHora?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["coletaAgendada"]>

  export type ColetaAgendadaSelectScalar = {
    id?: boolean
    pontoColeta?: boolean
    endereco?: boolean
    dataHora?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ColetaAgendadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pontoColeta" | "endereco" | "dataHora" | "status" | "createdAt", ExtArgs["result"]["coletaAgendada"]>

  export type $ColetaAgendadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ColetaAgendada"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pontoColeta: string
      endereco: string
      dataHora: Date
      status: string
      createdAt: Date
    }, ExtArgs["result"]["coletaAgendada"]>
    composites: {}
  }

  type ColetaAgendadaGetPayload<S extends boolean | null | undefined | ColetaAgendadaDefaultArgs> = $Result.GetResult<Prisma.$ColetaAgendadaPayload, S>

  type ColetaAgendadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColetaAgendadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColetaAgendadaCountAggregateInputType | true
    }

  export interface ColetaAgendadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ColetaAgendada'], meta: { name: 'ColetaAgendada' } }
    /**
     * Find zero or one ColetaAgendada that matches the filter.
     * @param {ColetaAgendadaFindUniqueArgs} args - Arguments to find a ColetaAgendada
     * @example
     * // Get one ColetaAgendada
     * const coletaAgendada = await prisma.coletaAgendada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColetaAgendadaFindUniqueArgs>(args: SelectSubset<T, ColetaAgendadaFindUniqueArgs<ExtArgs>>): Prisma__ColetaAgendadaClient<$Result.GetResult<Prisma.$ColetaAgendadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ColetaAgendada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColetaAgendadaFindUniqueOrThrowArgs} args - Arguments to find a ColetaAgendada
     * @example
     * // Get one ColetaAgendada
     * const coletaAgendada = await prisma.coletaAgendada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColetaAgendadaFindUniqueOrThrowArgs>(args: SelectSubset<T, ColetaAgendadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColetaAgendadaClient<$Result.GetResult<Prisma.$ColetaAgendadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColetaAgendada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaAgendadaFindFirstArgs} args - Arguments to find a ColetaAgendada
     * @example
     * // Get one ColetaAgendada
     * const coletaAgendada = await prisma.coletaAgendada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColetaAgendadaFindFirstArgs>(args?: SelectSubset<T, ColetaAgendadaFindFirstArgs<ExtArgs>>): Prisma__ColetaAgendadaClient<$Result.GetResult<Prisma.$ColetaAgendadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColetaAgendada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaAgendadaFindFirstOrThrowArgs} args - Arguments to find a ColetaAgendada
     * @example
     * // Get one ColetaAgendada
     * const coletaAgendada = await prisma.coletaAgendada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColetaAgendadaFindFirstOrThrowArgs>(args?: SelectSubset<T, ColetaAgendadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColetaAgendadaClient<$Result.GetResult<Prisma.$ColetaAgendadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ColetaAgendadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaAgendadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ColetaAgendadas
     * const coletaAgendadas = await prisma.coletaAgendada.findMany()
     * 
     * // Get first 10 ColetaAgendadas
     * const coletaAgendadas = await prisma.coletaAgendada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coletaAgendadaWithIdOnly = await prisma.coletaAgendada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColetaAgendadaFindManyArgs>(args?: SelectSubset<T, ColetaAgendadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColetaAgendadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ColetaAgendada.
     * @param {ColetaAgendadaCreateArgs} args - Arguments to create a ColetaAgendada.
     * @example
     * // Create one ColetaAgendada
     * const ColetaAgendada = await prisma.coletaAgendada.create({
     *   data: {
     *     // ... data to create a ColetaAgendada
     *   }
     * })
     * 
     */
    create<T extends ColetaAgendadaCreateArgs>(args: SelectSubset<T, ColetaAgendadaCreateArgs<ExtArgs>>): Prisma__ColetaAgendadaClient<$Result.GetResult<Prisma.$ColetaAgendadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ColetaAgendadas.
     * @param {ColetaAgendadaCreateManyArgs} args - Arguments to create many ColetaAgendadas.
     * @example
     * // Create many ColetaAgendadas
     * const coletaAgendada = await prisma.coletaAgendada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColetaAgendadaCreateManyArgs>(args?: SelectSubset<T, ColetaAgendadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ColetaAgendadas and returns the data saved in the database.
     * @param {ColetaAgendadaCreateManyAndReturnArgs} args - Arguments to create many ColetaAgendadas.
     * @example
     * // Create many ColetaAgendadas
     * const coletaAgendada = await prisma.coletaAgendada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ColetaAgendadas and only return the `id`
     * const coletaAgendadaWithIdOnly = await prisma.coletaAgendada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColetaAgendadaCreateManyAndReturnArgs>(args?: SelectSubset<T, ColetaAgendadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColetaAgendadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ColetaAgendada.
     * @param {ColetaAgendadaDeleteArgs} args - Arguments to delete one ColetaAgendada.
     * @example
     * // Delete one ColetaAgendada
     * const ColetaAgendada = await prisma.coletaAgendada.delete({
     *   where: {
     *     // ... filter to delete one ColetaAgendada
     *   }
     * })
     * 
     */
    delete<T extends ColetaAgendadaDeleteArgs>(args: SelectSubset<T, ColetaAgendadaDeleteArgs<ExtArgs>>): Prisma__ColetaAgendadaClient<$Result.GetResult<Prisma.$ColetaAgendadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ColetaAgendada.
     * @param {ColetaAgendadaUpdateArgs} args - Arguments to update one ColetaAgendada.
     * @example
     * // Update one ColetaAgendada
     * const coletaAgendada = await prisma.coletaAgendada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColetaAgendadaUpdateArgs>(args: SelectSubset<T, ColetaAgendadaUpdateArgs<ExtArgs>>): Prisma__ColetaAgendadaClient<$Result.GetResult<Prisma.$ColetaAgendadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ColetaAgendadas.
     * @param {ColetaAgendadaDeleteManyArgs} args - Arguments to filter ColetaAgendadas to delete.
     * @example
     * // Delete a few ColetaAgendadas
     * const { count } = await prisma.coletaAgendada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColetaAgendadaDeleteManyArgs>(args?: SelectSubset<T, ColetaAgendadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColetaAgendadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaAgendadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ColetaAgendadas
     * const coletaAgendada = await prisma.coletaAgendada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColetaAgendadaUpdateManyArgs>(args: SelectSubset<T, ColetaAgendadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColetaAgendadas and returns the data updated in the database.
     * @param {ColetaAgendadaUpdateManyAndReturnArgs} args - Arguments to update many ColetaAgendadas.
     * @example
     * // Update many ColetaAgendadas
     * const coletaAgendada = await prisma.coletaAgendada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ColetaAgendadas and only return the `id`
     * const coletaAgendadaWithIdOnly = await prisma.coletaAgendada.updateManyAndReturn({
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
    updateManyAndReturn<T extends ColetaAgendadaUpdateManyAndReturnArgs>(args: SelectSubset<T, ColetaAgendadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColetaAgendadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ColetaAgendada.
     * @param {ColetaAgendadaUpsertArgs} args - Arguments to update or create a ColetaAgendada.
     * @example
     * // Update or create a ColetaAgendada
     * const coletaAgendada = await prisma.coletaAgendada.upsert({
     *   create: {
     *     // ... data to create a ColetaAgendada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ColetaAgendada we want to update
     *   }
     * })
     */
    upsert<T extends ColetaAgendadaUpsertArgs>(args: SelectSubset<T, ColetaAgendadaUpsertArgs<ExtArgs>>): Prisma__ColetaAgendadaClient<$Result.GetResult<Prisma.$ColetaAgendadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ColetaAgendadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaAgendadaCountArgs} args - Arguments to filter ColetaAgendadas to count.
     * @example
     * // Count the number of ColetaAgendadas
     * const count = await prisma.coletaAgendada.count({
     *   where: {
     *     // ... the filter for the ColetaAgendadas we want to count
     *   }
     * })
    **/
    count<T extends ColetaAgendadaCountArgs>(
      args?: Subset<T, ColetaAgendadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColetaAgendadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ColetaAgendada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaAgendadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColetaAgendadaAggregateArgs>(args: Subset<T, ColetaAgendadaAggregateArgs>): Prisma.PrismaPromise<GetColetaAgendadaAggregateType<T>>

    /**
     * Group by ColetaAgendada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColetaAgendadaGroupByArgs} args - Group by arguments.
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
      T extends ColetaAgendadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColetaAgendadaGroupByArgs['orderBy'] }
        : { orderBy?: ColetaAgendadaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColetaAgendadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColetaAgendadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ColetaAgendada model
   */
  readonly fields: ColetaAgendadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ColetaAgendada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColetaAgendadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ColetaAgendada model
   */
  interface ColetaAgendadaFieldRefs {
    readonly id: FieldRef<"ColetaAgendada", 'Int'>
    readonly pontoColeta: FieldRef<"ColetaAgendada", 'String'>
    readonly endereco: FieldRef<"ColetaAgendada", 'String'>
    readonly dataHora: FieldRef<"ColetaAgendada", 'DateTime'>
    readonly status: FieldRef<"ColetaAgendada", 'String'>
    readonly createdAt: FieldRef<"ColetaAgendada", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ColetaAgendada findUnique
   */
  export type ColetaAgendadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
    /**
     * Filter, which ColetaAgendada to fetch.
     */
    where: ColetaAgendadaWhereUniqueInput
  }

  /**
   * ColetaAgendada findUniqueOrThrow
   */
  export type ColetaAgendadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
    /**
     * Filter, which ColetaAgendada to fetch.
     */
    where: ColetaAgendadaWhereUniqueInput
  }

  /**
   * ColetaAgendada findFirst
   */
  export type ColetaAgendadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
    /**
     * Filter, which ColetaAgendada to fetch.
     */
    where?: ColetaAgendadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColetaAgendadas to fetch.
     */
    orderBy?: ColetaAgendadaOrderByWithRelationInput | ColetaAgendadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColetaAgendadas.
     */
    cursor?: ColetaAgendadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColetaAgendadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColetaAgendadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColetaAgendadas.
     */
    distinct?: ColetaAgendadaScalarFieldEnum | ColetaAgendadaScalarFieldEnum[]
  }

  /**
   * ColetaAgendada findFirstOrThrow
   */
  export type ColetaAgendadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
    /**
     * Filter, which ColetaAgendada to fetch.
     */
    where?: ColetaAgendadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColetaAgendadas to fetch.
     */
    orderBy?: ColetaAgendadaOrderByWithRelationInput | ColetaAgendadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColetaAgendadas.
     */
    cursor?: ColetaAgendadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColetaAgendadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColetaAgendadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColetaAgendadas.
     */
    distinct?: ColetaAgendadaScalarFieldEnum | ColetaAgendadaScalarFieldEnum[]
  }

  /**
   * ColetaAgendada findMany
   */
  export type ColetaAgendadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
    /**
     * Filter, which ColetaAgendadas to fetch.
     */
    where?: ColetaAgendadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColetaAgendadas to fetch.
     */
    orderBy?: ColetaAgendadaOrderByWithRelationInput | ColetaAgendadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ColetaAgendadas.
     */
    cursor?: ColetaAgendadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColetaAgendadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColetaAgendadas.
     */
    skip?: number
    distinct?: ColetaAgendadaScalarFieldEnum | ColetaAgendadaScalarFieldEnum[]
  }

  /**
   * ColetaAgendada create
   */
  export type ColetaAgendadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
    /**
     * The data needed to create a ColetaAgendada.
     */
    data: XOR<ColetaAgendadaCreateInput, ColetaAgendadaUncheckedCreateInput>
  }

  /**
   * ColetaAgendada createMany
   */
  export type ColetaAgendadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ColetaAgendadas.
     */
    data: ColetaAgendadaCreateManyInput | ColetaAgendadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ColetaAgendada createManyAndReturn
   */
  export type ColetaAgendadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
    /**
     * The data used to create many ColetaAgendadas.
     */
    data: ColetaAgendadaCreateManyInput | ColetaAgendadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ColetaAgendada update
   */
  export type ColetaAgendadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
    /**
     * The data needed to update a ColetaAgendada.
     */
    data: XOR<ColetaAgendadaUpdateInput, ColetaAgendadaUncheckedUpdateInput>
    /**
     * Choose, which ColetaAgendada to update.
     */
    where: ColetaAgendadaWhereUniqueInput
  }

  /**
   * ColetaAgendada updateMany
   */
  export type ColetaAgendadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ColetaAgendadas.
     */
    data: XOR<ColetaAgendadaUpdateManyMutationInput, ColetaAgendadaUncheckedUpdateManyInput>
    /**
     * Filter which ColetaAgendadas to update
     */
    where?: ColetaAgendadaWhereInput
    /**
     * Limit how many ColetaAgendadas to update.
     */
    limit?: number
  }

  /**
   * ColetaAgendada updateManyAndReturn
   */
  export type ColetaAgendadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
    /**
     * The data used to update ColetaAgendadas.
     */
    data: XOR<ColetaAgendadaUpdateManyMutationInput, ColetaAgendadaUncheckedUpdateManyInput>
    /**
     * Filter which ColetaAgendadas to update
     */
    where?: ColetaAgendadaWhereInput
    /**
     * Limit how many ColetaAgendadas to update.
     */
    limit?: number
  }

  /**
   * ColetaAgendada upsert
   */
  export type ColetaAgendadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
    /**
     * The filter to search for the ColetaAgendada to update in case it exists.
     */
    where: ColetaAgendadaWhereUniqueInput
    /**
     * In case the ColetaAgendada found by the `where` argument doesn't exist, create a new ColetaAgendada with this data.
     */
    create: XOR<ColetaAgendadaCreateInput, ColetaAgendadaUncheckedCreateInput>
    /**
     * In case the ColetaAgendada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColetaAgendadaUpdateInput, ColetaAgendadaUncheckedUpdateInput>
  }

  /**
   * ColetaAgendada delete
   */
  export type ColetaAgendadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
    /**
     * Filter which ColetaAgendada to delete.
     */
    where: ColetaAgendadaWhereUniqueInput
  }

  /**
   * ColetaAgendada deleteMany
   */
  export type ColetaAgendadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColetaAgendadas to delete
     */
    where?: ColetaAgendadaWhereInput
    /**
     * Limit how many ColetaAgendadas to delete.
     */
    limit?: number
  }

  /**
   * ColetaAgendada without action
   */
  export type ColetaAgendadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColetaAgendada
     */
    select?: ColetaAgendadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColetaAgendada
     */
    omit?: ColetaAgendadaOmit<ExtArgs> | null
  }


  /**
   * Model Cooperativa
   */

  export type AggregateCooperativa = {
    _count: CooperativaCountAggregateOutputType | null
    _avg: CooperativaAvgAggregateOutputType | null
    _sum: CooperativaSumAggregateOutputType | null
    _min: CooperativaMinAggregateOutputType | null
    _max: CooperativaMaxAggregateOutputType | null
  }

  export type CooperativaAvgAggregateOutputType = {
    id: number | null
    numeroFuncionarios: number | null
    numeroVeiculos: number | null
  }

  export type CooperativaSumAggregateOutputType = {
    id: number | null
    numeroFuncionarios: number | null
    numeroVeiculos: number | null
  }

  export type CooperativaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cnpj: string | null
    endereco: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    telefone: string | null
    email: string | null
    responsavel: string | null
    cargo: string | null
    celular: string | null
    website: string | null
    descricao: string | null
    status: string | null
    capacidadeColeta: string | null
    numeroFuncionarios: number | null
    numeroVeiculos: number | null
    createdAt: Date | null
  }

  export type CooperativaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cnpj: string | null
    endereco: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    telefone: string | null
    email: string | null
    responsavel: string | null
    cargo: string | null
    celular: string | null
    website: string | null
    descricao: string | null
    status: string | null
    capacidadeColeta: string | null
    numeroFuncionarios: number | null
    numeroVeiculos: number | null
    createdAt: Date | null
  }

  export type CooperativaCountAggregateOutputType = {
    id: number
    nome: number
    cnpj: number
    endereco: number
    cidade: number
    estado: number
    cep: number
    telefone: number
    email: number
    responsavel: number
    cargo: number
    celular: number
    website: number
    descricao: number
    status: number
    tipoMaterial: number
    capacidadeColeta: number
    numeroFuncionarios: number
    numeroVeiculos: number
    createdAt: number
    _all: number
  }


  export type CooperativaAvgAggregateInputType = {
    id?: true
    numeroFuncionarios?: true
    numeroVeiculos?: true
  }

  export type CooperativaSumAggregateInputType = {
    id?: true
    numeroFuncionarios?: true
    numeroVeiculos?: true
  }

  export type CooperativaMinAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    telefone?: true
    email?: true
    responsavel?: true
    cargo?: true
    celular?: true
    website?: true
    descricao?: true
    status?: true
    capacidadeColeta?: true
    numeroFuncionarios?: true
    numeroVeiculos?: true
    createdAt?: true
  }

  export type CooperativaMaxAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    telefone?: true
    email?: true
    responsavel?: true
    cargo?: true
    celular?: true
    website?: true
    descricao?: true
    status?: true
    capacidadeColeta?: true
    numeroFuncionarios?: true
    numeroVeiculos?: true
    createdAt?: true
  }

  export type CooperativaCountAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    telefone?: true
    email?: true
    responsavel?: true
    cargo?: true
    celular?: true
    website?: true
    descricao?: true
    status?: true
    tipoMaterial?: true
    capacidadeColeta?: true
    numeroFuncionarios?: true
    numeroVeiculos?: true
    createdAt?: true
    _all?: true
  }

  export type CooperativaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cooperativa to aggregate.
     */
    where?: CooperativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cooperativas to fetch.
     */
    orderBy?: CooperativaOrderByWithRelationInput | CooperativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CooperativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cooperativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cooperativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cooperativas
    **/
    _count?: true | CooperativaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CooperativaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CooperativaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CooperativaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CooperativaMaxAggregateInputType
  }

  export type GetCooperativaAggregateType<T extends CooperativaAggregateArgs> = {
        [P in keyof T & keyof AggregateCooperativa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCooperativa[P]>
      : GetScalarType<T[P], AggregateCooperativa[P]>
  }




  export type CooperativaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CooperativaWhereInput
    orderBy?: CooperativaOrderByWithAggregationInput | CooperativaOrderByWithAggregationInput[]
    by: CooperativaScalarFieldEnum[] | CooperativaScalarFieldEnum
    having?: CooperativaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CooperativaCountAggregateInputType | true
    _avg?: CooperativaAvgAggregateInputType
    _sum?: CooperativaSumAggregateInputType
    _min?: CooperativaMinAggregateInputType
    _max?: CooperativaMaxAggregateInputType
  }

  export type CooperativaGroupByOutputType = {
    id: number
    nome: string
    cnpj: string
    endereco: string
    cidade: string
    estado: string
    cep: string | null
    telefone: string
    email: string
    responsavel: string
    cargo: string | null
    celular: string | null
    website: string | null
    descricao: string | null
    status: string
    tipoMaterial: string[]
    capacidadeColeta: string | null
    numeroFuncionarios: number
    numeroVeiculos: number
    createdAt: Date
    _count: CooperativaCountAggregateOutputType | null
    _avg: CooperativaAvgAggregateOutputType | null
    _sum: CooperativaSumAggregateOutputType | null
    _min: CooperativaMinAggregateOutputType | null
    _max: CooperativaMaxAggregateOutputType | null
  }

  type GetCooperativaGroupByPayload<T extends CooperativaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CooperativaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CooperativaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CooperativaGroupByOutputType[P]>
            : GetScalarType<T[P], CooperativaGroupByOutputType[P]>
        }
      >
    >


  export type CooperativaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    telefone?: boolean
    email?: boolean
    responsavel?: boolean
    cargo?: boolean
    celular?: boolean
    website?: boolean
    descricao?: boolean
    status?: boolean
    tipoMaterial?: boolean
    capacidadeColeta?: boolean
    numeroFuncionarios?: boolean
    numeroVeiculos?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cooperativa"]>

  export type CooperativaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    telefone?: boolean
    email?: boolean
    responsavel?: boolean
    cargo?: boolean
    celular?: boolean
    website?: boolean
    descricao?: boolean
    status?: boolean
    tipoMaterial?: boolean
    capacidadeColeta?: boolean
    numeroFuncionarios?: boolean
    numeroVeiculos?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cooperativa"]>

  export type CooperativaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    telefone?: boolean
    email?: boolean
    responsavel?: boolean
    cargo?: boolean
    celular?: boolean
    website?: boolean
    descricao?: boolean
    status?: boolean
    tipoMaterial?: boolean
    capacidadeColeta?: boolean
    numeroFuncionarios?: boolean
    numeroVeiculos?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cooperativa"]>

  export type CooperativaSelectScalar = {
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    telefone?: boolean
    email?: boolean
    responsavel?: boolean
    cargo?: boolean
    celular?: boolean
    website?: boolean
    descricao?: boolean
    status?: boolean
    tipoMaterial?: boolean
    capacidadeColeta?: boolean
    numeroFuncionarios?: boolean
    numeroVeiculos?: boolean
    createdAt?: boolean
  }

  export type CooperativaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cnpj" | "endereco" | "cidade" | "estado" | "cep" | "telefone" | "email" | "responsavel" | "cargo" | "celular" | "website" | "descricao" | "status" | "tipoMaterial" | "capacidadeColeta" | "numeroFuncionarios" | "numeroVeiculos" | "createdAt", ExtArgs["result"]["cooperativa"]>

  export type $CooperativaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cooperativa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cnpj: string
      endereco: string
      cidade: string
      estado: string
      cep: string | null
      telefone: string
      email: string
      responsavel: string
      cargo: string | null
      celular: string | null
      website: string | null
      descricao: string | null
      status: string
      tipoMaterial: string[]
      capacidadeColeta: string | null
      numeroFuncionarios: number
      numeroVeiculos: number
      createdAt: Date
    }, ExtArgs["result"]["cooperativa"]>
    composites: {}
  }

  type CooperativaGetPayload<S extends boolean | null | undefined | CooperativaDefaultArgs> = $Result.GetResult<Prisma.$CooperativaPayload, S>

  type CooperativaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CooperativaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CooperativaCountAggregateInputType | true
    }

  export interface CooperativaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cooperativa'], meta: { name: 'Cooperativa' } }
    /**
     * Find zero or one Cooperativa that matches the filter.
     * @param {CooperativaFindUniqueArgs} args - Arguments to find a Cooperativa
     * @example
     * // Get one Cooperativa
     * const cooperativa = await prisma.cooperativa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CooperativaFindUniqueArgs>(args: SelectSubset<T, CooperativaFindUniqueArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cooperativa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CooperativaFindUniqueOrThrowArgs} args - Arguments to find a Cooperativa
     * @example
     * // Get one Cooperativa
     * const cooperativa = await prisma.cooperativa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CooperativaFindUniqueOrThrowArgs>(args: SelectSubset<T, CooperativaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cooperativa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaFindFirstArgs} args - Arguments to find a Cooperativa
     * @example
     * // Get one Cooperativa
     * const cooperativa = await prisma.cooperativa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CooperativaFindFirstArgs>(args?: SelectSubset<T, CooperativaFindFirstArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cooperativa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaFindFirstOrThrowArgs} args - Arguments to find a Cooperativa
     * @example
     * // Get one Cooperativa
     * const cooperativa = await prisma.cooperativa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CooperativaFindFirstOrThrowArgs>(args?: SelectSubset<T, CooperativaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cooperativas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cooperativas
     * const cooperativas = await prisma.cooperativa.findMany()
     * 
     * // Get first 10 Cooperativas
     * const cooperativas = await prisma.cooperativa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cooperativaWithIdOnly = await prisma.cooperativa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CooperativaFindManyArgs>(args?: SelectSubset<T, CooperativaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cooperativa.
     * @param {CooperativaCreateArgs} args - Arguments to create a Cooperativa.
     * @example
     * // Create one Cooperativa
     * const Cooperativa = await prisma.cooperativa.create({
     *   data: {
     *     // ... data to create a Cooperativa
     *   }
     * })
     * 
     */
    create<T extends CooperativaCreateArgs>(args: SelectSubset<T, CooperativaCreateArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cooperativas.
     * @param {CooperativaCreateManyArgs} args - Arguments to create many Cooperativas.
     * @example
     * // Create many Cooperativas
     * const cooperativa = await prisma.cooperativa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CooperativaCreateManyArgs>(args?: SelectSubset<T, CooperativaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cooperativas and returns the data saved in the database.
     * @param {CooperativaCreateManyAndReturnArgs} args - Arguments to create many Cooperativas.
     * @example
     * // Create many Cooperativas
     * const cooperativa = await prisma.cooperativa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cooperativas and only return the `id`
     * const cooperativaWithIdOnly = await prisma.cooperativa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CooperativaCreateManyAndReturnArgs>(args?: SelectSubset<T, CooperativaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cooperativa.
     * @param {CooperativaDeleteArgs} args - Arguments to delete one Cooperativa.
     * @example
     * // Delete one Cooperativa
     * const Cooperativa = await prisma.cooperativa.delete({
     *   where: {
     *     // ... filter to delete one Cooperativa
     *   }
     * })
     * 
     */
    delete<T extends CooperativaDeleteArgs>(args: SelectSubset<T, CooperativaDeleteArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cooperativa.
     * @param {CooperativaUpdateArgs} args - Arguments to update one Cooperativa.
     * @example
     * // Update one Cooperativa
     * const cooperativa = await prisma.cooperativa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CooperativaUpdateArgs>(args: SelectSubset<T, CooperativaUpdateArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cooperativas.
     * @param {CooperativaDeleteManyArgs} args - Arguments to filter Cooperativas to delete.
     * @example
     * // Delete a few Cooperativas
     * const { count } = await prisma.cooperativa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CooperativaDeleteManyArgs>(args?: SelectSubset<T, CooperativaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cooperativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cooperativas
     * const cooperativa = await prisma.cooperativa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CooperativaUpdateManyArgs>(args: SelectSubset<T, CooperativaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cooperativas and returns the data updated in the database.
     * @param {CooperativaUpdateManyAndReturnArgs} args - Arguments to update many Cooperativas.
     * @example
     * // Update many Cooperativas
     * const cooperativa = await prisma.cooperativa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cooperativas and only return the `id`
     * const cooperativaWithIdOnly = await prisma.cooperativa.updateManyAndReturn({
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
    updateManyAndReturn<T extends CooperativaUpdateManyAndReturnArgs>(args: SelectSubset<T, CooperativaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cooperativa.
     * @param {CooperativaUpsertArgs} args - Arguments to update or create a Cooperativa.
     * @example
     * // Update or create a Cooperativa
     * const cooperativa = await prisma.cooperativa.upsert({
     *   create: {
     *     // ... data to create a Cooperativa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cooperativa we want to update
     *   }
     * })
     */
    upsert<T extends CooperativaUpsertArgs>(args: SelectSubset<T, CooperativaUpsertArgs<ExtArgs>>): Prisma__CooperativaClient<$Result.GetResult<Prisma.$CooperativaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cooperativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaCountArgs} args - Arguments to filter Cooperativas to count.
     * @example
     * // Count the number of Cooperativas
     * const count = await prisma.cooperativa.count({
     *   where: {
     *     // ... the filter for the Cooperativas we want to count
     *   }
     * })
    **/
    count<T extends CooperativaCountArgs>(
      args?: Subset<T, CooperativaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CooperativaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cooperativa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CooperativaAggregateArgs>(args: Subset<T, CooperativaAggregateArgs>): Prisma.PrismaPromise<GetCooperativaAggregateType<T>>

    /**
     * Group by Cooperativa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CooperativaGroupByArgs} args - Group by arguments.
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
      T extends CooperativaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CooperativaGroupByArgs['orderBy'] }
        : { orderBy?: CooperativaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CooperativaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCooperativaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cooperativa model
   */
  readonly fields: CooperativaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cooperativa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CooperativaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Cooperativa model
   */
  interface CooperativaFieldRefs {
    readonly id: FieldRef<"Cooperativa", 'Int'>
    readonly nome: FieldRef<"Cooperativa", 'String'>
    readonly cnpj: FieldRef<"Cooperativa", 'String'>
    readonly endereco: FieldRef<"Cooperativa", 'String'>
    readonly cidade: FieldRef<"Cooperativa", 'String'>
    readonly estado: FieldRef<"Cooperativa", 'String'>
    readonly cep: FieldRef<"Cooperativa", 'String'>
    readonly telefone: FieldRef<"Cooperativa", 'String'>
    readonly email: FieldRef<"Cooperativa", 'String'>
    readonly responsavel: FieldRef<"Cooperativa", 'String'>
    readonly cargo: FieldRef<"Cooperativa", 'String'>
    readonly celular: FieldRef<"Cooperativa", 'String'>
    readonly website: FieldRef<"Cooperativa", 'String'>
    readonly descricao: FieldRef<"Cooperativa", 'String'>
    readonly status: FieldRef<"Cooperativa", 'String'>
    readonly tipoMaterial: FieldRef<"Cooperativa", 'String[]'>
    readonly capacidadeColeta: FieldRef<"Cooperativa", 'String'>
    readonly numeroFuncionarios: FieldRef<"Cooperativa", 'Int'>
    readonly numeroVeiculos: FieldRef<"Cooperativa", 'Int'>
    readonly createdAt: FieldRef<"Cooperativa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cooperativa findUnique
   */
  export type CooperativaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
    /**
     * Filter, which Cooperativa to fetch.
     */
    where: CooperativaWhereUniqueInput
  }

  /**
   * Cooperativa findUniqueOrThrow
   */
  export type CooperativaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
    /**
     * Filter, which Cooperativa to fetch.
     */
    where: CooperativaWhereUniqueInput
  }

  /**
   * Cooperativa findFirst
   */
  export type CooperativaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
    /**
     * Filter, which Cooperativa to fetch.
     */
    where?: CooperativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cooperativas to fetch.
     */
    orderBy?: CooperativaOrderByWithRelationInput | CooperativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cooperativas.
     */
    cursor?: CooperativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cooperativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cooperativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cooperativas.
     */
    distinct?: CooperativaScalarFieldEnum | CooperativaScalarFieldEnum[]
  }

  /**
   * Cooperativa findFirstOrThrow
   */
  export type CooperativaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
    /**
     * Filter, which Cooperativa to fetch.
     */
    where?: CooperativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cooperativas to fetch.
     */
    orderBy?: CooperativaOrderByWithRelationInput | CooperativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cooperativas.
     */
    cursor?: CooperativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cooperativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cooperativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cooperativas.
     */
    distinct?: CooperativaScalarFieldEnum | CooperativaScalarFieldEnum[]
  }

  /**
   * Cooperativa findMany
   */
  export type CooperativaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
    /**
     * Filter, which Cooperativas to fetch.
     */
    where?: CooperativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cooperativas to fetch.
     */
    orderBy?: CooperativaOrderByWithRelationInput | CooperativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cooperativas.
     */
    cursor?: CooperativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cooperativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cooperativas.
     */
    skip?: number
    distinct?: CooperativaScalarFieldEnum | CooperativaScalarFieldEnum[]
  }

  /**
   * Cooperativa create
   */
  export type CooperativaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
    /**
     * The data needed to create a Cooperativa.
     */
    data: XOR<CooperativaCreateInput, CooperativaUncheckedCreateInput>
  }

  /**
   * Cooperativa createMany
   */
  export type CooperativaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cooperativas.
     */
    data: CooperativaCreateManyInput | CooperativaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cooperativa createManyAndReturn
   */
  export type CooperativaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
    /**
     * The data used to create many Cooperativas.
     */
    data: CooperativaCreateManyInput | CooperativaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cooperativa update
   */
  export type CooperativaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
    /**
     * The data needed to update a Cooperativa.
     */
    data: XOR<CooperativaUpdateInput, CooperativaUncheckedUpdateInput>
    /**
     * Choose, which Cooperativa to update.
     */
    where: CooperativaWhereUniqueInput
  }

  /**
   * Cooperativa updateMany
   */
  export type CooperativaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cooperativas.
     */
    data: XOR<CooperativaUpdateManyMutationInput, CooperativaUncheckedUpdateManyInput>
    /**
     * Filter which Cooperativas to update
     */
    where?: CooperativaWhereInput
    /**
     * Limit how many Cooperativas to update.
     */
    limit?: number
  }

  /**
   * Cooperativa updateManyAndReturn
   */
  export type CooperativaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
    /**
     * The data used to update Cooperativas.
     */
    data: XOR<CooperativaUpdateManyMutationInput, CooperativaUncheckedUpdateManyInput>
    /**
     * Filter which Cooperativas to update
     */
    where?: CooperativaWhereInput
    /**
     * Limit how many Cooperativas to update.
     */
    limit?: number
  }

  /**
   * Cooperativa upsert
   */
  export type CooperativaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
    /**
     * The filter to search for the Cooperativa to update in case it exists.
     */
    where: CooperativaWhereUniqueInput
    /**
     * In case the Cooperativa found by the `where` argument doesn't exist, create a new Cooperativa with this data.
     */
    create: XOR<CooperativaCreateInput, CooperativaUncheckedCreateInput>
    /**
     * In case the Cooperativa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CooperativaUpdateInput, CooperativaUncheckedUpdateInput>
  }

  /**
   * Cooperativa delete
   */
  export type CooperativaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
    /**
     * Filter which Cooperativa to delete.
     */
    where: CooperativaWhereUniqueInput
  }

  /**
   * Cooperativa deleteMany
   */
  export type CooperativaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cooperativas to delete
     */
    where?: CooperativaWhereInput
    /**
     * Limit how many Cooperativas to delete.
     */
    limit?: number
  }

  /**
   * Cooperativa without action
   */
  export type CooperativaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cooperativa
     */
    select?: CooperativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cooperativa
     */
    omit?: CooperativaOmit<ExtArgs> | null
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


  export const ColetaScalarFieldEnum: {
    id: 'id',
    pontoColeta: 'pontoColeta',
    peso: 'peso',
    unidade: 'unidade',
    observacoes: 'observacoes',
    localizacao: 'localizacao',
    createdAt: 'createdAt'
  };

  export type ColetaScalarFieldEnum = (typeof ColetaScalarFieldEnum)[keyof typeof ColetaScalarFieldEnum]


  export const ColetaAgendadaScalarFieldEnum: {
    id: 'id',
    pontoColeta: 'pontoColeta',
    endereco: 'endereco',
    dataHora: 'dataHora',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ColetaAgendadaScalarFieldEnum = (typeof ColetaAgendadaScalarFieldEnum)[keyof typeof ColetaAgendadaScalarFieldEnum]


  export const CooperativaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    endereco: 'endereco',
    cidade: 'cidade',
    estado: 'estado',
    cep: 'cep',
    telefone: 'telefone',
    email: 'email',
    responsavel: 'responsavel',
    cargo: 'cargo',
    celular: 'celular',
    website: 'website',
    descricao: 'descricao',
    status: 'status',
    tipoMaterial: 'tipoMaterial',
    capacidadeColeta: 'capacidadeColeta',
    numeroFuncionarios: 'numeroFuncionarios',
    numeroVeiculos: 'numeroVeiculos',
    createdAt: 'createdAt'
  };

  export type CooperativaScalarFieldEnum = (typeof CooperativaScalarFieldEnum)[keyof typeof CooperativaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type ColetaWhereInput = {
    AND?: ColetaWhereInput | ColetaWhereInput[]
    OR?: ColetaWhereInput[]
    NOT?: ColetaWhereInput | ColetaWhereInput[]
    id?: IntFilter<"Coleta"> | number
    pontoColeta?: StringFilter<"Coleta"> | string
    peso?: FloatFilter<"Coleta"> | number
    unidade?: StringFilter<"Coleta"> | string
    observacoes?: StringNullableFilter<"Coleta"> | string | null
    localizacao?: JsonNullableFilter<"Coleta">
    createdAt?: DateTimeFilter<"Coleta"> | Date | string
  }

  export type ColetaOrderByWithRelationInput = {
    id?: SortOrder
    pontoColeta?: SortOrder
    peso?: SortOrder
    unidade?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ColetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColetaWhereInput | ColetaWhereInput[]
    OR?: ColetaWhereInput[]
    NOT?: ColetaWhereInput | ColetaWhereInput[]
    pontoColeta?: StringFilter<"Coleta"> | string
    peso?: FloatFilter<"Coleta"> | number
    unidade?: StringFilter<"Coleta"> | string
    observacoes?: StringNullableFilter<"Coleta"> | string | null
    localizacao?: JsonNullableFilter<"Coleta">
    createdAt?: DateTimeFilter<"Coleta"> | Date | string
  }, "id">

  export type ColetaOrderByWithAggregationInput = {
    id?: SortOrder
    pontoColeta?: SortOrder
    peso?: SortOrder
    unidade?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    localizacao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ColetaCountOrderByAggregateInput
    _avg?: ColetaAvgOrderByAggregateInput
    _max?: ColetaMaxOrderByAggregateInput
    _min?: ColetaMinOrderByAggregateInput
    _sum?: ColetaSumOrderByAggregateInput
  }

  export type ColetaScalarWhereWithAggregatesInput = {
    AND?: ColetaScalarWhereWithAggregatesInput | ColetaScalarWhereWithAggregatesInput[]
    OR?: ColetaScalarWhereWithAggregatesInput[]
    NOT?: ColetaScalarWhereWithAggregatesInput | ColetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Coleta"> | number
    pontoColeta?: StringWithAggregatesFilter<"Coleta"> | string
    peso?: FloatWithAggregatesFilter<"Coleta"> | number
    unidade?: StringWithAggregatesFilter<"Coleta"> | string
    observacoes?: StringNullableWithAggregatesFilter<"Coleta"> | string | null
    localizacao?: JsonNullableWithAggregatesFilter<"Coleta">
    createdAt?: DateTimeWithAggregatesFilter<"Coleta"> | Date | string
  }

  export type ColetaAgendadaWhereInput = {
    AND?: ColetaAgendadaWhereInput | ColetaAgendadaWhereInput[]
    OR?: ColetaAgendadaWhereInput[]
    NOT?: ColetaAgendadaWhereInput | ColetaAgendadaWhereInput[]
    id?: IntFilter<"ColetaAgendada"> | number
    pontoColeta?: StringFilter<"ColetaAgendada"> | string
    endereco?: StringFilter<"ColetaAgendada"> | string
    dataHora?: DateTimeFilter<"ColetaAgendada"> | Date | string
    status?: StringFilter<"ColetaAgendada"> | string
    createdAt?: DateTimeFilter<"ColetaAgendada"> | Date | string
  }

  export type ColetaAgendadaOrderByWithRelationInput = {
    id?: SortOrder
    pontoColeta?: SortOrder
    endereco?: SortOrder
    dataHora?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ColetaAgendadaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColetaAgendadaWhereInput | ColetaAgendadaWhereInput[]
    OR?: ColetaAgendadaWhereInput[]
    NOT?: ColetaAgendadaWhereInput | ColetaAgendadaWhereInput[]
    pontoColeta?: StringFilter<"ColetaAgendada"> | string
    endereco?: StringFilter<"ColetaAgendada"> | string
    dataHora?: DateTimeFilter<"ColetaAgendada"> | Date | string
    status?: StringFilter<"ColetaAgendada"> | string
    createdAt?: DateTimeFilter<"ColetaAgendada"> | Date | string
  }, "id">

  export type ColetaAgendadaOrderByWithAggregationInput = {
    id?: SortOrder
    pontoColeta?: SortOrder
    endereco?: SortOrder
    dataHora?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ColetaAgendadaCountOrderByAggregateInput
    _avg?: ColetaAgendadaAvgOrderByAggregateInput
    _max?: ColetaAgendadaMaxOrderByAggregateInput
    _min?: ColetaAgendadaMinOrderByAggregateInput
    _sum?: ColetaAgendadaSumOrderByAggregateInput
  }

  export type ColetaAgendadaScalarWhereWithAggregatesInput = {
    AND?: ColetaAgendadaScalarWhereWithAggregatesInput | ColetaAgendadaScalarWhereWithAggregatesInput[]
    OR?: ColetaAgendadaScalarWhereWithAggregatesInput[]
    NOT?: ColetaAgendadaScalarWhereWithAggregatesInput | ColetaAgendadaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ColetaAgendada"> | number
    pontoColeta?: StringWithAggregatesFilter<"ColetaAgendada"> | string
    endereco?: StringWithAggregatesFilter<"ColetaAgendada"> | string
    dataHora?: DateTimeWithAggregatesFilter<"ColetaAgendada"> | Date | string
    status?: StringWithAggregatesFilter<"ColetaAgendada"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ColetaAgendada"> | Date | string
  }

  export type CooperativaWhereInput = {
    AND?: CooperativaWhereInput | CooperativaWhereInput[]
    OR?: CooperativaWhereInput[]
    NOT?: CooperativaWhereInput | CooperativaWhereInput[]
    id?: IntFilter<"Cooperativa"> | number
    nome?: StringFilter<"Cooperativa"> | string
    cnpj?: StringFilter<"Cooperativa"> | string
    endereco?: StringFilter<"Cooperativa"> | string
    cidade?: StringFilter<"Cooperativa"> | string
    estado?: StringFilter<"Cooperativa"> | string
    cep?: StringNullableFilter<"Cooperativa"> | string | null
    telefone?: StringFilter<"Cooperativa"> | string
    email?: StringFilter<"Cooperativa"> | string
    responsavel?: StringFilter<"Cooperativa"> | string
    cargo?: StringNullableFilter<"Cooperativa"> | string | null
    celular?: StringNullableFilter<"Cooperativa"> | string | null
    website?: StringNullableFilter<"Cooperativa"> | string | null
    descricao?: StringNullableFilter<"Cooperativa"> | string | null
    status?: StringFilter<"Cooperativa"> | string
    tipoMaterial?: StringNullableListFilter<"Cooperativa">
    capacidadeColeta?: StringNullableFilter<"Cooperativa"> | string | null
    numeroFuncionarios?: IntFilter<"Cooperativa"> | number
    numeroVeiculos?: IntFilter<"Cooperativa"> | number
    createdAt?: DateTimeFilter<"Cooperativa"> | Date | string
  }

  export type CooperativaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrderInput | SortOrder
    telefone?: SortOrder
    email?: SortOrder
    responsavel?: SortOrder
    cargo?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrder
    tipoMaterial?: SortOrder
    capacidadeColeta?: SortOrderInput | SortOrder
    numeroFuncionarios?: SortOrder
    numeroVeiculos?: SortOrder
    createdAt?: SortOrder
  }

  export type CooperativaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cnpj?: string
    AND?: CooperativaWhereInput | CooperativaWhereInput[]
    OR?: CooperativaWhereInput[]
    NOT?: CooperativaWhereInput | CooperativaWhereInput[]
    nome?: StringFilter<"Cooperativa"> | string
    endereco?: StringFilter<"Cooperativa"> | string
    cidade?: StringFilter<"Cooperativa"> | string
    estado?: StringFilter<"Cooperativa"> | string
    cep?: StringNullableFilter<"Cooperativa"> | string | null
    telefone?: StringFilter<"Cooperativa"> | string
    email?: StringFilter<"Cooperativa"> | string
    responsavel?: StringFilter<"Cooperativa"> | string
    cargo?: StringNullableFilter<"Cooperativa"> | string | null
    celular?: StringNullableFilter<"Cooperativa"> | string | null
    website?: StringNullableFilter<"Cooperativa"> | string | null
    descricao?: StringNullableFilter<"Cooperativa"> | string | null
    status?: StringFilter<"Cooperativa"> | string
    tipoMaterial?: StringNullableListFilter<"Cooperativa">
    capacidadeColeta?: StringNullableFilter<"Cooperativa"> | string | null
    numeroFuncionarios?: IntFilter<"Cooperativa"> | number
    numeroVeiculos?: IntFilter<"Cooperativa"> | number
    createdAt?: DateTimeFilter<"Cooperativa"> | Date | string
  }, "id" | "cnpj">

  export type CooperativaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrderInput | SortOrder
    telefone?: SortOrder
    email?: SortOrder
    responsavel?: SortOrder
    cargo?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrder
    tipoMaterial?: SortOrder
    capacidadeColeta?: SortOrderInput | SortOrder
    numeroFuncionarios?: SortOrder
    numeroVeiculos?: SortOrder
    createdAt?: SortOrder
    _count?: CooperativaCountOrderByAggregateInput
    _avg?: CooperativaAvgOrderByAggregateInput
    _max?: CooperativaMaxOrderByAggregateInput
    _min?: CooperativaMinOrderByAggregateInput
    _sum?: CooperativaSumOrderByAggregateInput
  }

  export type CooperativaScalarWhereWithAggregatesInput = {
    AND?: CooperativaScalarWhereWithAggregatesInput | CooperativaScalarWhereWithAggregatesInput[]
    OR?: CooperativaScalarWhereWithAggregatesInput[]
    NOT?: CooperativaScalarWhereWithAggregatesInput | CooperativaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cooperativa"> | number
    nome?: StringWithAggregatesFilter<"Cooperativa"> | string
    cnpj?: StringWithAggregatesFilter<"Cooperativa"> | string
    endereco?: StringWithAggregatesFilter<"Cooperativa"> | string
    cidade?: StringWithAggregatesFilter<"Cooperativa"> | string
    estado?: StringWithAggregatesFilter<"Cooperativa"> | string
    cep?: StringNullableWithAggregatesFilter<"Cooperativa"> | string | null
    telefone?: StringWithAggregatesFilter<"Cooperativa"> | string
    email?: StringWithAggregatesFilter<"Cooperativa"> | string
    responsavel?: StringWithAggregatesFilter<"Cooperativa"> | string
    cargo?: StringNullableWithAggregatesFilter<"Cooperativa"> | string | null
    celular?: StringNullableWithAggregatesFilter<"Cooperativa"> | string | null
    website?: StringNullableWithAggregatesFilter<"Cooperativa"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"Cooperativa"> | string | null
    status?: StringWithAggregatesFilter<"Cooperativa"> | string
    tipoMaterial?: StringNullableListFilter<"Cooperativa">
    capacidadeColeta?: StringNullableWithAggregatesFilter<"Cooperativa"> | string | null
    numeroFuncionarios?: IntWithAggregatesFilter<"Cooperativa"> | number
    numeroVeiculos?: IntWithAggregatesFilter<"Cooperativa"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cooperativa"> | Date | string
  }

  export type ColetaCreateInput = {
    pontoColeta: string
    peso: number
    unidade: string
    observacoes?: string | null
    localizacao?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ColetaUncheckedCreateInput = {
    id?: number
    pontoColeta: string
    peso: number
    unidade: string
    observacoes?: string | null
    localizacao?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ColetaUpdateInput = {
    pontoColeta?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pontoColeta?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColetaCreateManyInput = {
    id?: number
    pontoColeta: string
    peso: number
    unidade: string
    observacoes?: string | null
    localizacao?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ColetaUpdateManyMutationInput = {
    pontoColeta?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pontoColeta?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    unidade?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    localizacao?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColetaAgendadaCreateInput = {
    pontoColeta: string
    endereco: string
    dataHora: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type ColetaAgendadaUncheckedCreateInput = {
    id?: number
    pontoColeta: string
    endereco: string
    dataHora: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type ColetaAgendadaUpdateInput = {
    pontoColeta?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColetaAgendadaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pontoColeta?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColetaAgendadaCreateManyInput = {
    id?: number
    pontoColeta: string
    endereco: string
    dataHora: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type ColetaAgendadaUpdateManyMutationInput = {
    pontoColeta?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColetaAgendadaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pontoColeta?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CooperativaCreateInput = {
    nome: string
    cnpj: string
    endereco: string
    cidade: string
    estado: string
    cep?: string | null
    telefone: string
    email: string
    responsavel: string
    cargo?: string | null
    celular?: string | null
    website?: string | null
    descricao?: string | null
    status?: string
    tipoMaterial?: CooperativaCreatetipoMaterialInput | string[]
    capacidadeColeta?: string | null
    numeroFuncionarios: number
    numeroVeiculos: number
    createdAt?: Date | string
  }

  export type CooperativaUncheckedCreateInput = {
    id?: number
    nome: string
    cnpj: string
    endereco: string
    cidade: string
    estado: string
    cep?: string | null
    telefone: string
    email: string
    responsavel: string
    cargo?: string | null
    celular?: string | null
    website?: string | null
    descricao?: string | null
    status?: string
    tipoMaterial?: CooperativaCreatetipoMaterialInput | string[]
    capacidadeColeta?: string | null
    numeroFuncionarios: number
    numeroVeiculos: number
    createdAt?: Date | string
  }

  export type CooperativaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tipoMaterial?: CooperativaUpdatetipoMaterialInput | string[]
    capacidadeColeta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroFuncionarios?: IntFieldUpdateOperationsInput | number
    numeroVeiculos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CooperativaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tipoMaterial?: CooperativaUpdatetipoMaterialInput | string[]
    capacidadeColeta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroFuncionarios?: IntFieldUpdateOperationsInput | number
    numeroVeiculos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CooperativaCreateManyInput = {
    id?: number
    nome: string
    cnpj: string
    endereco: string
    cidade: string
    estado: string
    cep?: string | null
    telefone: string
    email: string
    responsavel: string
    cargo?: string | null
    celular?: string | null
    website?: string | null
    descricao?: string | null
    status?: string
    tipoMaterial?: CooperativaCreatetipoMaterialInput | string[]
    capacidadeColeta?: string | null
    numeroFuncionarios: number
    numeroVeiculos: number
    createdAt?: Date | string
  }

  export type CooperativaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tipoMaterial?: CooperativaUpdatetipoMaterialInput | string[]
    capacidadeColeta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroFuncionarios?: IntFieldUpdateOperationsInput | number
    numeroVeiculos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CooperativaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    responsavel?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tipoMaterial?: CooperativaUpdatetipoMaterialInput | string[]
    capacidadeColeta?: NullableStringFieldUpdateOperationsInput | string | null
    numeroFuncionarios?: IntFieldUpdateOperationsInput | number
    numeroVeiculos?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ColetaCountOrderByAggregateInput = {
    id?: SortOrder
    pontoColeta?: SortOrder
    peso?: SortOrder
    unidade?: SortOrder
    observacoes?: SortOrder
    localizacao?: SortOrder
    createdAt?: SortOrder
  }

  export type ColetaAvgOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
  }

  export type ColetaMaxOrderByAggregateInput = {
    id?: SortOrder
    pontoColeta?: SortOrder
    peso?: SortOrder
    unidade?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
  }

  export type ColetaMinOrderByAggregateInput = {
    id?: SortOrder
    pontoColeta?: SortOrder
    peso?: SortOrder
    unidade?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
  }

  export type ColetaSumOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type ColetaAgendadaCountOrderByAggregateInput = {
    id?: SortOrder
    pontoColeta?: SortOrder
    endereco?: SortOrder
    dataHora?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ColetaAgendadaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ColetaAgendadaMaxOrderByAggregateInput = {
    id?: SortOrder
    pontoColeta?: SortOrder
    endereco?: SortOrder
    dataHora?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ColetaAgendadaMinOrderByAggregateInput = {
    id?: SortOrder
    pontoColeta?: SortOrder
    endereco?: SortOrder
    dataHora?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ColetaAgendadaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CooperativaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    responsavel?: SortOrder
    cargo?: SortOrder
    celular?: SortOrder
    website?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    tipoMaterial?: SortOrder
    capacidadeColeta?: SortOrder
    numeroFuncionarios?: SortOrder
    numeroVeiculos?: SortOrder
    createdAt?: SortOrder
  }

  export type CooperativaAvgOrderByAggregateInput = {
    id?: SortOrder
    numeroFuncionarios?: SortOrder
    numeroVeiculos?: SortOrder
  }

  export type CooperativaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    responsavel?: SortOrder
    cargo?: SortOrder
    celular?: SortOrder
    website?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    capacidadeColeta?: SortOrder
    numeroFuncionarios?: SortOrder
    numeroVeiculos?: SortOrder
    createdAt?: SortOrder
  }

  export type CooperativaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    responsavel?: SortOrder
    cargo?: SortOrder
    celular?: SortOrder
    website?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    capacidadeColeta?: SortOrder
    numeroFuncionarios?: SortOrder
    numeroVeiculos?: SortOrder
    createdAt?: SortOrder
  }

  export type CooperativaSumOrderByAggregateInput = {
    id?: SortOrder
    numeroFuncionarios?: SortOrder
    numeroVeiculos?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CooperativaCreatetipoMaterialInput = {
    set: string[]
  }

  export type CooperativaUpdatetipoMaterialInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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