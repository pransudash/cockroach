// Copyright 2018 The Cockroach Authors.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.txt.
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0, included in the file
// licenses/APL.txt.

// Default value for data invalidation in redux store.
// The main purpose is to decrease the number of requests on server.
export const CACHE_INVALIDATION_PERIOD = 300000; // defaults to 5min
export const DOMAIN_NAME = "adminUI";