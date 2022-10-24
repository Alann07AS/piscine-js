function getAcceleration(params) {
if (params.f/params.m === params.Δv/params.Δt === 2*params.d/(params.t*params.t)) {
    return params.f/params.m
} else {
    'impossible'
}
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