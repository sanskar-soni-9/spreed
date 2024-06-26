/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;

export type paths = {
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/backend": {
    /** Update the recording status as a backend */
    post: operations["recording-backend"];
  };
  "/ocs/v2.php/apps/spreed/api/{apiVersion}/recording/{token}/store": {
    /** Store the recording */
    post: operations["recording-store"];
  };
};

export type webhooks = Record<string, never>;

export type components = {
  schemas: {
    Capabilities: {
      features: string[];
      "features-local": string[];
      config: {
        attachments: {
          allowed: boolean;
          folder?: string;
        };
        call: {
          enabled: boolean;
          "breakout-rooms": boolean;
          recording: boolean;
          /** Format: int64 */
          "recording-consent": number;
          "supported-reactions": string[];
          "predefined-backgrounds": string[];
          "can-upload-background": boolean;
          "sip-enabled": boolean;
          "sip-dialout-enabled": boolean;
          "can-enable-sip": boolean;
        };
        chat: {
          /** Format: int64 */
          "max-length": number;
          /** Format: int64 */
          "read-privacy": number;
          "has-translation-providers": boolean;
          /** Format: int64 */
          "typing-privacy": number;
        };
        conversations: {
          "can-create": boolean;
        };
        federation: {
          enabled: boolean;
          "incoming-enabled": boolean;
          "outgoing-enabled": boolean;
          "only-trusted-servers": boolean;
        };
        previews: {
          /** Format: int64 */
          "max-gif-size": number;
        };
        signaling: {
          /** Format: int64 */
          "session-ping-limit": number;
          "hello-v2-token-key"?: string;
        };
      };
      "config-local": {
        [key: string]: string[];
      };
      version: string;
    };
    OCSMeta: {
      status: string;
      statuscode: number;
      message?: string;
      totalitems?: string;
      itemsperpage?: string;
    };
    PublicCapabilities: OneOf<[{
      spreed: components["schemas"]["Capabilities"];
    }, unknown[]]>;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
};

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = {

  /** Update the recording status as a backend */
  "recording-backend": {
    parameters: {
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v1";
      };
    };
    responses: {
      /** @description Recording status updated successfully */
      200: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description Updating recording status is not possible */
      400: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: {
                type: string;
                error: {
                  code: string;
                  message: string;
                };
              };
            };
          };
        };
      };
      /** @description Missing permissions to update recording status */
      403: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: {
                type: string;
                error: {
                  code: string;
                  message: string;
                };
              };
            };
          };
        };
      };
      /** @description Room not found */
      404: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: {
                type: string;
                error: {
                  code: string;
                  message: string;
                };
              };
            };
          };
        };
      };
    };
  };
  /** Store the recording */
  "recording-store": {
    parameters: {
      query?: {
        /** @description User that will own the recording file. `null` is actually not allowed and will always result in a "400 Bad Request". It's only allowed code-wise to handle requests where the post data exceeded the limits, so we can return a proper error instead of "500 Internal Server Error". */
        owner?: string | null;
      };
      header: {
        /** @description Required to be true for the API request to pass */
        "OCS-APIRequest": boolean;
      };
      path: {
        apiVersion: "v1";
        token: string;
      };
    };
    responses: {
      /** @description Recording stored successfully */
      200: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: unknown;
            };
          };
        };
      };
      /** @description Storing recording is not possible */
      400: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: {
                error: string;
              };
            };
          };
        };
      };
      /** @description Missing permissions to store recording */
      401: {
        content: {
          "application/json": {
            ocs: {
              meta: components["schemas"]["OCSMeta"];
              data: {
                type: string;
                error: {
                  code: string;
                  message: string;
                };
              };
            };
          };
        };
      };
    };
  };
};
