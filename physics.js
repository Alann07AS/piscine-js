function getAcceleration(params) {
    let result = 0
if (params.f/params.m) {
    result = params.f/params.m
} else if  ((params.Δv/params.Δt) === result || (params.Δv/params.Δt)){
    result = params.Δv/params.Δt
} else if  ((2*params.d/(params.t*params.t) === result || (2*params.d/(params.t*params.t)))) {
    result = 2*params.d/(params.t*params.t)
} else {
    return 'impossible'
}
return result
}

// a = F/m
// a = Δv/Δt
// a = 2d/t^2
// 
// a = acceleration
// m = mass
// F = force
// Δv = final velocity - initial velocity
// Δt = final time - initial time
// d = distance
// t = time

console.log(getAcceleration({f: 10, m: 5, t: 3, d: 3000}))